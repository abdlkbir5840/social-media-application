package com.abdelbahmadi.controller;

import com.abdelbahmadi.authentication.CustomeUserDetailsService;
import com.abdelbahmadi.authentication.JwtProvider;
import com.abdelbahmadi.exception.EntityAlreadyExistException;
import com.abdelbahmadi.models.User;
import com.abdelbahmadi.repository.UserRepository;
import com.abdelbahmadi.response.AuthResponse;
import com.abdelbahmadi.response.LoginRequest;
import com.abdelbahmadi.response.RegisterRequest;
import com.abdelbahmadi.response.UserDTO;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {
    private   final UserRepository userRepository;
    private   final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;
    private  final CustomeUserDetailsService customeUserDetailsService;
    @PostMapping("/signup")
    public AuthResponse registerUser(@RequestBody RegisterRequest registerRequest){

        if (userRepository.findUserByEmail(registerRequest.getEmail()).isPresent()){
            throw new EntityAlreadyExistException("Email Already Used With Another Account");
        }
        User newUser = modelMapper.map(registerRequest, User.class);
        newUser.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        User savedUser = userRepository.save(newUser);
        Authentication authentication = new UsernamePasswordAuthenticationToken(savedUser.getEmail(), savedUser.getPassword());
        String token = JwtProvider.generateToken(authentication);
        AuthResponse authResponse = new AuthResponse("Register Success", token);
        return  authResponse;
    }
    @PostMapping("/signin")
    public AuthResponse loginUser(@RequestBody LoginRequest loginRequest){
        Authentication authentication = autenticate(loginRequest.getEmail(), loginRequest.getPassword());
        String token = JwtProvider.generateToken(authentication);
        AuthResponse authResponse = new AuthResponse("Login Success", token);
        return  authResponse;
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
