package com.abdelbahmadi.service;

import com.abdelbahmadi.authentication.JwtProvider;
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

@Service
@RequiredArgsConstructor
public class ProfileServiceImpl  implements  ProfileService{
    private  final ProfileRepository profileRepository;
    private  final PostService postService;
    private  final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final ApplicationMapper  applicationMapper;
    @Override
    public Profile createProfile(RegisterRequest registerRequest) {
        Profile profile = modelMapper.map(registerRequest, Profile.class);
        return profileRepository.save(profile);
    }

    @Override
    public ProfileResponse getProfile(Integer id) {
        User user = userRepository.findById(id).orElseThrow(()
                -> new EntityNotFoundException("User with ID "+id+" not found"));
        return ProfileResponse.builder()
                .profileDTO(applicationMapper.toProfileDTO(user))
                .postDTOList(postService.findPostByUserId(id))
                .build();
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
        List<Profile>  profiles = profileRepository.searchUser(query);
        return profiles;
    }
}
