package com.abdelbahmadi.service;

import com.abdelbahmadi.exception.EntityAlreadyExistException;
import com.abdelbahmadi.exception.EntityNotFoundException;
import com.abdelbahmadi.exception.IllegalArgumentException;
import com.abdelbahmadi.response.UserDTO;

import java.util.List;
import java.util.Set;

public interface UserService {
     List<UserDTO> getAll();
     UserDTO findUserById (Integer id) throws EntityNotFoundException;
     UserDTO findUserByEmail (String email) throws EntityNotFoundException;
     UserDTO registerUser (UserDTO userDTO) throws EntityAlreadyExistException;
     UserDTO updateUser (UserDTO userDTO, Integer id) throws EntityNotFoundException;
     UserDTO followUser(Integer followerId, Integer followedId) throws EntityNotFoundException, IllegalArgumentException;
     Set<UserDTO>  findFollowers(Integer id) throws EntityNotFoundException;
     Set<UserDTO> findFollowings(Integer id) throws EntityNotFoundException;
      List<UserDTO> searchUser(String query);
     void removeUser(Integer id) throws EntityNotFoundException;
}
