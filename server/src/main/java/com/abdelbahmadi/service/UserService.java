package com.abdelbahmadi.service;

import com.abdelbahmadi.models.User;

import java.util.List;

public interface UserService {
    public List<User> getAll();
    public User findUserById (Integer id) throws Exception;
    public User findUserByEmail (String email) throws Exception;
    public User registerUser (User user);
    public User updateUser (User user, Integer id) throws Exception;
    public User followUser(Integer followerId, Integer followedId) throws Exception;
    public  List<User> searchUser(String query);
    public  String removeUser(Integer id);
}
