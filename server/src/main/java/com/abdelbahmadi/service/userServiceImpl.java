package com.abdelbahmadi.service;

import com.abdelbahmadi.models.User;
import com.abdelbahmadi.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class userServiceImpl implements  UserService{
    private final UserRepository userRepository;
    @Override
    public List<User> getAll() {
        List<User> users = userRepository.findAll();
        return users;
    }

    @Override
    public User findUserById(Integer id) throws Exception {
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()){
            return  user.get();
        }
        throw new Exception("User with ID "+id+" not found");
    }

    @Override
    public User findUserByEmail(String email) throws Exception {
        Optional<User> user = userRepository.findUserByEmail(email);
        if(user.isPresent()){
            return  user.get();
        }
        throw new Exception("User with email "+email+" not found");
    }

    @Override
    public User registerUser(User user) {
        User newUser = User.builder()
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .password(user.getPassword())
                .gender(user.getGender())
                .build();
        User savedUser = userRepository.save(newUser);
        return savedUser;
    }

    @Override
    public User updateUser(User user, Integer id) throws Exception {
        User oldeUser = this.findUserById(id);
        if(user.getFirstName()!=null){
            oldeUser.setFirstName(user.getFirstName());
        }
        if(user.getLastName()!=null){
            oldeUser.setLastName(user.getLastName());
        }
        if(user.getEmail()!=null){
            oldeUser.setEmail(user.getEmail());
        }
        if(user.getPassword()!=null){
            oldeUser.setPassword(user.getPassword());
        }
        if(user.getGender()!=null){
            oldeUser.setGender(user.getGender());
        }
        User updatedUser = userRepository.save(oldeUser);
        return updatedUser;
    }

    @Override
    public User followUser(Integer followerId, Integer followedId) throws  Exception{
        User follower = this.findUserById(followerId);
        User followed = this.findUserById(followedId);

        followed.getFollowers().add(follower);
        follower.getFollowings().add(followed);
        userRepository.save(followed);
        userRepository.save(follower);
        return follower;
    }

    @Override
    public List<User> searchUser(String query) {
        return userRepository.searchUser(query);
    }

    @Override
    public String removeUser(Integer id) {
        return null;
    }
}
