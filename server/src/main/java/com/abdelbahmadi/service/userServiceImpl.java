package com.abdelbahmadi.service;

import com.abdelbahmadi.authentication.JwtProvider;
import com.abdelbahmadi.exception.EntityNotFoundException;
import com.abdelbahmadi.mapper.ApplicationMapper;
import com.abdelbahmadi.models.User;
import com.abdelbahmadi.repository.UserRepository;
import com.abdelbahmadi.response.UserDTO;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements  UserService{
    private final UserRepository userRepository;
    private final ApplicationMapper applicationMapper;
    @Override
    public List<UserDTO> getAll() {
        List<User> users = userRepository.findAll();
        return users.stream().map(applicationMapper::toUserDto).collect(Collectors.toList());
    }
    @Override
    public UserDTO findUserById(Integer id) throws EntityNotFoundException {
        User user = userRepository.findById(id).orElseThrow(()
                -> new EntityNotFoundException("User with ID "+id+" not found"));
        return applicationMapper.toUserDto(user);
    }
    @Override
    public UserDTO findUserByEmail(String email) throws EntityNotFoundException {
        Optional<User> user = userRepository.findUserByEmail(email);
        if(user.isEmpty()){
            throw new EntityNotFoundException("User with email "+email+" not found");
        }
        return  applicationMapper.toUserDto(user.get());
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
        return applicationMapper.toUserDto(updatedUser);
    }
    @Override
    public List<UserDTO> searchUser(String query) {
        List<User>  users = userRepository.searchUser(query);
        return users.stream().map(applicationMapper::toUserDto).collect(Collectors.toList());
    }
    @Override
    public UserDTO findUserByJwt(String bearerToken) {
        String token = JwtProvider.extractTokenFromBearerToken(bearerToken);
        String email = JwtProvider.getEmailFromJwtToken(token);
        return  findUserByEmail(email);
    }
    @Override
    public void removeUser(Integer id)throws EntityNotFoundException {
        User  user = userRepository.findById(id).orElseThrow(()
                ->new EntityNotFoundException("User with ID "+id+" not found"));
        userRepository.delete(user);
    }
}
