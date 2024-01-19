package com.abdelbahmadi.service;

import com.abdelbahmadi.response.AuthResponse;
import com.abdelbahmadi.response.LoginRequest;
import com.abdelbahmadi.response.RegisterRequest;

public interface AuthService {
    AuthResponse registerUser( RegisterRequest registerRequest);
    AuthResponse loginUser( LoginRequest loginRequest);
}
