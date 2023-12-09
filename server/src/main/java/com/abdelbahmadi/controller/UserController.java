package com.abdelbahmadi.controller;

import com.abdelbahmadi.exception.EntityNotFoundException;
import com.abdelbahmadi.response.UserDTO;
import com.abdelbahmadi.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RequestMapping("/users")
@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    @GetMapping
    public List<UserDTO> getUsers(){
        return userService.getAll();
    }
    @GetMapping("/{id}")
    public UserDTO getUserById(@PathVariable  Integer id)  {
       return userService.findUserById(id);
    }
    @GetMapping("/email/{email}")
    public UserDTO getUserByEmail(@PathVariable  String email) {
        return userService.findUserByEmail(email);
    }
    @PostMapping
    public  UserDTO createUser(@RequestBody UserDTO userDTO){
        return userService.registerUser(userDTO);
    }
    @PutMapping("/{id}")
    public  UserDTO updateUser(@RequestBody UserDTO userDTO, @PathVariable  Integer id) {
        return userService.updateUser(userDTO, id);
    }
    @PostMapping("/follow/{followerId}/{followedId}")
    public UserDTO followUser(@PathVariable Integer followerId, @PathVariable Integer followedId) {
        return userService.followUser(followerId, followedId);
    }
    @GetMapping("/search")
    public List<UserDTO> searchUsers(@RequestParam("query") String query) {
        return userService.searchUser(query);
    }
    @GetMapping("/followers/{id}")
    public Set<UserDTO> getFollowers(@PathVariable Integer id)   {
        return userService.findFollowers(id);
    }
    @GetMapping("/followings/{id}")
    public Set<UserDTO> getFollowings(@PathVariable Integer id)   {
     return userService.findFollowings(id);
    }
    @DeleteMapping("/{id}")
    public  void deleteUser(@PathVariable Integer id)  {
        userService.removeUser(id);
    }
}
