package com.abdelbahmadi.authentication;

import com.abdelbahmadi.exception.AccessDeniedException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.core.Authentication;
import javax.crypto.SecretKey;
import java.util.Date;
public class JwtProvider {
    private static SecretKey key  = Keys.hmacShaKeyFor(JwtConstants.getSecretKey().getBytes());
    public static String generateToken (Authentication authentication){
        String jwt = Jwts.builder()
                .issuer("abdelkabir")
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 86400000))
                .claim("email", authentication.getName())
                .signWith(  key)
                .compact();
        return  jwt;
    }
    public static TokenValidationConstants verifyJwt(String token) {
        try {
            Jwts.parser()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token);
            return TokenValidationConstants.VALID;
        } catch (ExpiredJwtException e) {
            return TokenValidationConstants.EXPIRED;
        } catch (SignatureException e) {
            return TokenValidationConstants.INVALID_SIGNATURE;
        } catch (Exception e) {
            return TokenValidationConstants.INVALID;
        }
    }
    public static boolean isTokenExpired(String token) {
        try {
            Claims claims = Jwts.parser()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
            Date expirationDate = claims.getExpiration();
            Date currentDate = new Date();
            return expirationDate != null && expirationDate.before(currentDate);
        } catch (ExpiredJwtException e) {
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    public  static  String getEmailFromJwtToken(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
        return  claims.get("email", String.class);
    }
    public  static  String extractTokenFromJwt(HttpServletRequest request){
        String jwt = request.getHeader(JwtConstants.JWT_HEADER);
        if(jwt!=null && jwt.startsWith("Bearer")){
            String token = jwt.substring(7);
            return token;
        }
        throw new AccessDeniedException("Require authentication");
    }
    public  static  String extractTokenFromBearerToken(String bearerToken){
        if(bearerToken!=null && bearerToken.startsWith("Bearer")){
            String token = bearerToken.substring(7);
            return token;
        }
        throw new AccessDeniedException("Require authentication");
    }
}
