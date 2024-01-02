package com.abdelbahmadi.authentication;

import com.abdelbahmadi.exception.AccessDeniedException;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class JwtValidator extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String requestURI = request.getRequestURI();
        try {
            if (requestURI.startsWith("/api/v1/")) {
                    String token = JwtProvider.extractTokenFromJwt(request);
                    TokenValidationConstants validationResult = JwtProvider.verifyJwt(token);
                    switch (validationResult) {
                        case VALID:
                            if (!JwtProvider.isTokenExpired(token)) {
                                String email = JwtProvider.getEmailFromJwtToken(token);
                                List<GrantedAuthority> authorities = new ArrayList<>();
                                Authentication authentication = new UsernamePasswordAuthenticationToken(email, null, authorities);
                                SecurityContextHolder.getContext().setAuthentication(authentication);
                            } else {
                                throw new BadCredentialsException("The token has  expired...");
                            }
                            break;
                        case EXPIRED:
                            throw new BadCredentialsException("The token has expired...");
                        case INVALID_SIGNATURE:
                            throw new BadCredentialsException("The token signature is invalid...");
                        case INVALID:
                        default:
                            throw new AccessDeniedException("Please provide a valid token");
                    }
            }
            filterChain.doFilter(request, response);
        } catch (BadCredentialsException | AccessDeniedException exception) {
            response.sendError(HttpServletResponse.SC_FORBIDDEN, exception.getMessage());
        }
    }

}
