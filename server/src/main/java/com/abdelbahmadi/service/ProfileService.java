package com.abdelbahmadi.service;

import com.abdelbahmadi.models.Profile;
import com.abdelbahmadi.response.ProfileResponse;
import com.abdelbahmadi.response.ProfileSelectionDTO;
import com.abdelbahmadi.response.RegisterRequest;
import com.abdelbahmadi.response.UserDTO;

import java.util.List;

public interface ProfileService {
    Profile createProfile(RegisterRequest registerRequest);
    ProfileResponse getProfile(Integer id);
    ProfileSelectionDTO getProfileSelection(String bearerToken);
    List<Profile> searchUser(String query);
}
