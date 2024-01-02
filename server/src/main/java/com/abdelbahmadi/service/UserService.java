package com.abdelbahmadi.service;

import com.abdelbahmadi.exception.EntityAlreadyExistException;
import com.abdelbahmadi.exception.EntityNotFoundException;
import com.abdelbahmadi.exception.IllegalArgumentException;
import com.abdelbahmadi.models.Follows;
import com.abdelbahmadi.models.User;
import com.abdelbahmadi.response.FollowsDTO;
import com.abdelbahmadi.response.UserDTO;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Set;

public interface UserService {
     List<UserDTO> getAll();
     UserDTO findUserById (Integer id) throws EntityNotFoundException;
     UserDTO findUserByEmail (String email) throws EntityNotFoundException;
     UserDTO registerUser (UserDTO userDTO) throws EntityAlreadyExistException;
     UserDTO updateUser (UserDTO userDTO, Integer id) throws EntityNotFoundException;
     UserDTO followUser(Integer followerId, Integer followedId) throws EntityNotFoundException, IllegalArgumentException;
     Set<FollowsDTO>  findFollowers(Integer id) throws EntityNotFoundException;
     Set<FollowsDTO> findFollowings(Integer id) throws EntityNotFoundException;
      List<UserDTO> searchUser(String query);
     UserDTO findUserByJwt(String bearerToken);
     void removeUser(Integer id) throws EntityNotFoundException;
}
