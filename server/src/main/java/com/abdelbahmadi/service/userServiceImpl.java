package com.abdelbahmadi.service;

import com.abdelbahmadi.authentication.JwtProvider;
import com.abdelbahmadi.exception.EntityAlreadyExistException;
import com.abdelbahmadi.exception.EntityNotFoundException;
import com.abdelbahmadi.exception.IllegalArgumentException;
import com.abdelbahmadi.models.Follows;
import com.abdelbahmadi.models.User;
import com.abdelbahmadi.repository.FollowsRepository;
import com.abdelbahmadi.repository.UserRepository;
import com.abdelbahmadi.response.FollowsDTO;
import com.abdelbahmadi.response.UserDTO;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class userServiceImpl implements  UserService{
    private final UserRepository userRepository;
    private final FollowsRepository  followsRepository;
    private final ModelMapper modelMapper;
    @Override
    public List<UserDTO> getAll() {
        List<User> users = userRepository.findAll();
        List<UserDTO> userDTOS = users.stream().map(user->
                modelMapper.map(user, UserDTO.class)).collect(Collectors.toList());
        return userDTOS;
    }
    @Override
    public UserDTO findUserById(Integer id) throws EntityNotFoundException {
        User user = userRepository.findById(id).orElseThrow(()
                -> new EntityNotFoundException("User with ID "+id+" not found"));
        return modelMapper.map(user, UserDTO.class);
    }
    @Override
    public UserDTO findUserByEmail(String email) throws EntityNotFoundException {
        Optional<User> user = userRepository.findUserByEmail(email);
        if(!user.isPresent()){
            throw new EntityNotFoundException("User with email "+email+" not found");
        }
        return  modelMapper.map(user.get(), UserDTO.class);
    }
    @Override
    public UserDTO registerUser(UserDTO userDTO) throws EntityAlreadyExistException {
        if (userRepository.findUserByEmail(userDTO.getEmail()).isPresent()){
            throw new EntityAlreadyExistException("User with Email "+userDTO.getEmail()+" Already exist");
        }
        User newUser = modelMapper.map(userDTO, User.class);
        User savedUser = userRepository.save(newUser);
        return  modelMapper.map(savedUser, UserDTO.class);
    }
    @Override
    public UserDTO updateUser(UserDTO userDTO, Integer id) throws EntityNotFoundException {
        User  oldeUser = userRepository.findById(id).orElseThrow(()
                ->new EntityNotFoundException("User with ID "+id+" not found"));
        if(userDTO.getFirstName()!=null){
            oldeUser.setFirstName(userDTO.getFirstName());
        }
        if(userDTO.getLastName()!=null){
            oldeUser.setLastName(userDTO.getLastName());
        }
        if(userDTO.getGender()!=null){
            oldeUser.setGender(userDTO.getGender());
        }
        User updatedUser = userRepository.save(oldeUser);
        return modelMapper.map(updatedUser, UserDTO.class);
    }
    @Override
    public UserDTO followUser(Integer followerId, Integer followedId) throws EntityNotFoundException, IllegalArgumentException {
        if (followerId.equals(followedId)) {
            throw new IllegalArgumentException("Follower ID cannot be equal to Followed ID");
        }
        User follower = userRepository.findById(followerId)
                .orElseThrow(() -> new EntityNotFoundException("User with ID " + followerId + " not found"));
        User followed = userRepository.findById(followedId)
                .orElseThrow(() -> new EntityNotFoundException("User with ID " + followedId + " not found"));
        Optional<Follows> existingFollow = followsRepository.findByFollowerAndFollowing(follower, followed);
        if (existingFollow.isPresent()) {
            System.out.println("from existingFollow");
            followsRepository.delete(existingFollow.get());
        } else {
            Follows follows = new Follows();
            follows.setFollower(follower);
            follows.setFollowing(followed);
            follows.setStatus("Pending");
            followsRepository.save(follows);
        }
        return modelMapper.map(follower, UserDTO.class);
    }
    @Override
    public Set<FollowsDTO> findFollowers(Integer userId) throws EntityNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found with ID: " + userId));

        return user.getFollowers().stream()
                .map(follower -> {
                    FollowsDTO dto = modelMapper.map(follower.getFollower(), FollowsDTO.class);
                    dto.setStatus(follower.getStatus());
                    return dto;
                })
                .collect(Collectors.toSet());
    }
    @Override
    public Set<FollowsDTO> findFollowings(Integer userId) throws EntityNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found with ID: " + userId));
        return user.getFollowing().stream()
                .map(following -> {
                    FollowsDTO dto = modelMapper.map(following.getFollowing(), FollowsDTO.class);
                    dto.setStatus(following.getStatus());
                    return dto;
                })
                .collect(Collectors.toSet());
    }
    @Override
    public List<UserDTO> searchUser(String query) {
        List<User>  users = userRepository.searchUser(query);
        List<UserDTO> userDTOS = users.stream().map(user
                -> modelMapper.map(user, UserDTO.class)).collect(Collectors.toList());;
        return userDTOS;
    }
    @Override
    public UserDTO findUserByJwt(String bearerToken) {
        String token = JwtProvider.extractTokenFromBearerToken(bearerToken);
        String email = JwtProvider.getEmailFromJwtToken(token);
        UserDTO userDTO = findUserByEmail(email);
        return userDTO;
    }
    @Override
    public void removeUser(Integer id)throws EntityNotFoundException {
        UserDTO user = findUserById(id);
        userRepository.delete(modelMapper.map(user, User.class));
    }
}
