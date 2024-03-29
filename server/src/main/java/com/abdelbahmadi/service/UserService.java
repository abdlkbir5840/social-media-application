package com.abdelbahmadi.service;

import com.abdelbahmadi.exception.EntityAlreadyExistException;
import com.abdelbahmadi.exception.EntityNotFoundException;
import com.abdelbahmadi.response.UserDTO;

import java.util.List;
import java.util.Set;

public interface UserService {
     List<UserDTO> getAll();
     UserDTO findUserById (Integer id) throws EntityNotFoundException;
     UserDTO findUserByEmail (String email) throws EntityNotFoundException;
     UserDTO updateUser (UserDTO userDTO, Integer id) throws EntityNotFoundException;
     UserDTO findUserByJwt(String bearerToken);
     void removeUser(Integer id) throws EntityNotFoundException;
}
