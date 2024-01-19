package com.abdelbahmadi.controller;

import com.abdelbahmadi.response.ProfileResponse;
import com.abdelbahmadi.response.ProfileSelectionDTO;
import com.abdelbahmadi.service.ProfileService;
import com.abdelbahmadi.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/v1/profile")
@RestController
@RequiredArgsConstructor
public class ProfileController {
    private final ProfileService profileService;
    private  final UserService userService;
    @GetMapping("/profileSelection")
    public ProfileSelectionDTO getProfileSelection(@RequestHeader("Authorization") String bearerToken)  {
        return profileService.getProfileSelection(bearerToken);
    }
    @GetMapping("/profile/{userId}")
    public ProfileResponse getProfile(@RequestHeader("Authorization") String bearerToken, @PathVariable Integer userId)  {
        userService.findUserByJwt(bearerToken);
        return profileService.getProfile(userId);
    }
}
