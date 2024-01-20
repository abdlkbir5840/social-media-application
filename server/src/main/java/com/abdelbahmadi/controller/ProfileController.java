package com.abdelbahmadi.controller;

import com.abdelbahmadi.response.ProfileDTO;
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
    @PutMapping("/{profileId}/{userId}")
    public ProfileDTO editProfile(@RequestHeader("Authorization") String bearerToken, @RequestBody ProfileDTO profileDTO, @PathVariable Integer profileId, @PathVariable Integer userId)  {
        userService.findUserByJwt(bearerToken);
        return profileService.editProfile(profileDTO, profileId, userId);
    }
    @GetMapping("/{userId}")
    public ProfileDTO getProfile(@RequestHeader("Authorization") String bearerToken, @PathVariable Integer userId)  {
        userService.findUserByJwt(bearerToken);
        return profileService.getProfile(userId);
    }
}
