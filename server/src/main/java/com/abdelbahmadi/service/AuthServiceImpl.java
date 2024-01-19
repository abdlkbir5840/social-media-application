package com.abdelbahmadi.service;

import com.abdelbahmadi.authentication.CustomeUserDetailsService;
import com.abdelbahmadi.authentication.JwtProvider;
import com.abdelbahmadi.exception.EntityAlreadyExistException;
import com.abdelbahmadi.models.Profile;
import com.abdelbahmadi.models.User;
import com.abdelbahmadi.repository.UserRepository;
import com.abdelbahmadi.response.AuthResponse;
import com.abdelbahmadi.response.LoginRequest;
import com.abdelbahmadi.response.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements  AuthService{
    private   final UserRepository userRepository;
    private   final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;
    private  final CustomeUserDetailsService customeUserDetailsService;
    @Override
    public AuthResponse registerUser(RegisterRequest registerRequest) {
        if (userRepository.findUserByEmail(registerRequest.getEmail()).isPresent()){
            throw new EntityAlreadyExistException("Email Already Used With Another Account");
        }
        User newUser = modelMapper.map(registerRequest, User.class);
        Profile profile = modelMapper.map(registerRequest, Profile.class);
        newUser.setProfile(profile);
        newUser.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        userRepository.save(newUser);
        return  AuthResponse.builder()
                .message("Register Success")
                .build();
    }

    @Override
    public AuthResponse loginUser(LoginRequest loginRequest) {
        Authentication authentication = autenticate(loginRequest.getEmail(), loginRequest.getPassword());
        String token = JwtProvider.generateToken(authentication);
        return  AuthResponse.builder()
                .message("Login Success")
                .token(token)
                .build();
    }

    private Authentication autenticate(String email, String password) {
        UserDetails userDetails = customeUserDetailsService.loadUserByUsername(email);
        if (userDetails == null) {
            throw new BadCredentialsException("Inavild Username");
        }
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid username or password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails.getUsername(), null, userDetails.getAuthorities());
    }
}
