package com.abdelbahmadi.service;

import com.abdelbahmadi.authentication.JwtProvider;
import com.abdelbahmadi.exception.AccessDeniedException;
import com.abdelbahmadi.exception.EntityNotFoundException;
import com.abdelbahmadi.mapper.ApplicationMapper;
import com.abdelbahmadi.models.Profile;
import com.abdelbahmadi.models.User;
import com.abdelbahmadi.repository.ProfileRepository;
import com.abdelbahmadi.repository.UserRepository;
import com.abdelbahmadi.response.*;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class ProfileServiceImpl  implements  ProfileService{
    private  final ProfileRepository profileRepository;
    private  final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final ApplicationMapper  applicationMapper;
    @Override
    public ProfileDTO editProfile(ProfileDTO profileDTO,  Integer profileId, Integer userId){
        if(!Objects.equals(userId, profileDTO.getUserId()))
            throw new AccessDeniedException("Access Denied: You do not have the right to modify other users' profile");
        User user = userRepository.findById(userId).orElseThrow(()
                ->new EntityNotFoundException("User with ID "+userId+"not found"));
        Profile existingprofile = user.getProfile();
        modelMapper.map(profileDTO, existingprofile);
        existingprofile.setId(profileId);
        Profile updatedProfile = profileRepository.save(existingprofile);
        user.setProfile(updatedProfile);
        return applicationMapper.toProfileDTO( user) ;
    }
    @Override
    public ProfileDTO getProfile(Integer userId) {
        User user = userRepository.findById(userId).orElseThrow(()
                -> new EntityNotFoundException("User with ID "+userId+" not found"));
        return applicationMapper.toProfileDTO(user);
    }

    @Override
    public ProfileSelectionDTO getProfileSelection(String bearerToken) {
        String token = JwtProvider.extractTokenFromBearerToken(bearerToken);
        String email = JwtProvider.getEmailFromJwtToken(token);
        User user = userRepository.findUserByEmail(email).orElseThrow(()
                -> new EntityNotFoundException("User with email "+email+" not found"));
        ProfileSelectionDTO profileSelectionDTO = applicationMapper.toProfileSelectionDTO(user.getProfile());
        profileSelectionDTO.setUserId(user.getId());
        return profileSelectionDTO ;
    }
    @Override
    public List<Profile> searchUser(String query) {
        return  profileRepository.searchUser(query);
    }
}
