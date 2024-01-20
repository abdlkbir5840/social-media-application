package com.abdelbahmadi.service;

import com.abdelbahmadi.models.Profile;
import com.abdelbahmadi.response.*;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface ProfileService {
    ProfileDTO editProfile(ProfileDTO profileDTO,  Integer profileId, Integer userId);
    ProfileDTO getProfile(Integer userId);
    ProfileSelectionDTO getProfileSelection(String bearerToken);
    List<Profile> searchUser(String query);
}
