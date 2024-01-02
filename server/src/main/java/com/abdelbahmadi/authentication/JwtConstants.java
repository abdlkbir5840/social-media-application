package com.abdelbahmadi.authentication;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtConstants {

    public static String JWT_HEADER = "Authorization";
    private static   String SECRET_KEY;

    @Value("${jwt.secret-key}")
    private String secretKey;
    public static String getSecretKey() {
        return SECRET_KEY;
    }
    @PostConstruct
    private void init() {
        SECRET_KEY = secretKey;
    }

}
