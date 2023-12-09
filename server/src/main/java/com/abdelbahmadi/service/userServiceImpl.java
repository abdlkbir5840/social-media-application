package com.abdelbahmadi.service;

import com.abdelbahmadi.exception.EntityAlreadyExistException;
import com.abdelbahmadi.exception.EntityNotFoundException;
import com.abdelbahmadi.exception.IllegalArgumentException;
import com.abdelbahmadi.models.User;
import com.abdelbahmadi.repository.UserRepository;
import com.abdelbahmadi.response.UserDTO;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class userServiceImpl implements  UserService{
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    @Override
    public List<UserDTO> getAll() {
        List<User> users = userRepository.findAll();
        List<UserDTO> userDTOS = users.stream().map(user->modelMapper.map(user, UserDTO.class)).collect(Collectors.toList());
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
        UserDTO oldeUser = this.findUserById(id);
        if(userDTO.getFirstName()!=null){
            oldeUser.setFirstName(userDTO.getFirstName());
        }
        if(userDTO.getLastName()!=null){
            oldeUser.setLastName(userDTO.getLastName());
        }
        if(userDTO.getEmail()!=null){
            oldeUser.setEmail(userDTO.getEmail());
        }
        if(userDTO.getPassword()!=null){
            oldeUser.setPassword(userDTO.getPassword());
        }
        if(userDTO.getGender()!=null){
            oldeUser.setGender(userDTO.getGender());
        }
        User updatedUser = userRepository.save(modelMapper.map(oldeUser,User.class));
        return modelMapper.map(updatedUser, UserDTO.class);
    }
    @Override
    public UserDTO followUser(Integer followerId, Integer followedId) throws EntityNotFoundException, IllegalArgumentException {
        if(followerId == followedId){
            throw  new IllegalArgumentException("Follower ID cannot be equal to Followed ID");
        }
        User follower = userRepository.findById(followerId).orElseThrow(()
                -> new EntityNotFoundException("User with ID "+followerId+" not found"));
        User  followed = userRepository.findById(followedId).orElseThrow(()
                -> new EntityNotFoundException("User with ID "+followedId+" not found"));
        if (isAlreadyFollowing(follower, followed)) {
            follower.getFollowings().remove(followed);
            followed.getFollowers().remove(follower);
        }else{
            follower.getFollowings().add(followed);
            followed.getFollowers().add(follower);
        }
        userRepository.save(follower);
        userRepository.save(followed);
        return modelMapper.map(follower, UserDTO.class);
    }
    @Override
    public Set<UserDTO> findFollowers(Integer id) throws EntityNotFoundException {
        User user = userRepository.findById(id).orElseThrow(()
                -> new EntityNotFoundException("User with ID "+id+" not found"));
        Set<UserDTO> followers = user.getFollowers().stream().map(follower
                -> modelMapper.map(follower, UserDTO.class)).collect(Collectors.toSet());
        return followers;
    }
    @Override
    public Set<UserDTO>  findFollowings(Integer id) throws EntityNotFoundException {
        User user = userRepository.findById(id).orElseThrow(()
                -> new RuntimeException("Utilisateur non trouvé avec l'ID : " + id));
        Set<UserDTO> followings = user.getFollowings().stream().map(following
                -> modelMapper.map(following, UserDTO.class)).collect(Collectors.toSet());
        return followings;
    }
    private boolean isAlreadyFollowing(User follower, User followed) {
        return follower.getFollowings().contains(followed);
    }
    @Override
    public List<UserDTO> searchUser(String query) {
        List<User>  users = userRepository.searchUser(query);
        List<UserDTO> userDTOS = users.stream().map(user
                -> modelMapper.map(user, UserDTO.class)).collect(Collectors.toList());;
        return userDTOS;
    }
    @Override
    public void removeUser(Integer id)throws EntityNotFoundException {
        UserDTO user = findUserById(id);
        userRepository.delete(modelMapper.map(user, User.class));
    }
}
