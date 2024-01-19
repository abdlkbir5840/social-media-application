package com.abdelbahmadi.controller;

import com.abdelbahmadi.response.AuthResponse;
import com.abdelbahmadi.response.LoginRequest;
import com.abdelbahmadi.response.RegisterRequest;
import com.abdelbahmadi.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {
    private   final AuthService authService;
    @PostMapping("/signup")
    public AuthResponse registerUser(@RequestBody RegisterRequest registerRequest){
        return authService.registerUser(registerRequest);
    }
    @PostMapping("/signin")
    public AuthResponse loginUser(@RequestBody LoginRequest loginRequest){
        return authService.loginUser(loginRequest);
    }
}
