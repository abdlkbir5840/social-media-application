package com.abdelbahmadi.service;

import com.abdelbahmadi.exception.EntityAlreadyExistException;
import com.abdelbahmadi.exception.EntityNotFoundException;
import com.abdelbahmadi.exception.IllegalArgumentException;
import com.abdelbahmadi.models.User;
import com.abdelbahmadi.response.UserDTO;

import java.util.List;
import java.util.Set;

public interface UserService {
    public List<UserDTO> getAll();
    public UserDTO findUserById (Integer id) throws EntityNotFoundException;
    public UserDTO findUserByEmail (String email) throws EntityNotFoundException;
    public UserDTO registerUser (UserDTO userDTO) throws EntityAlreadyExistException;
    public UserDTO updateUser (UserDTO userDTO, Integer id) throws EntityNotFoundException;
    public UserDTO followUser(Integer followerId, Integer followedId) throws EntityNotFoundException, IllegalArgumentException;
    public Set<UserDTO>  findFollowers(Integer id) throws EntityNotFoundException;
    public Set<UserDTO> findFollowings(Integer id) throws EntityNotFoundException;
    public  List<UserDTO> searchUser(String query);
    public void removeUser(Integer id) throws EntityNotFoundException;
}
