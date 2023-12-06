package com.abdelbahmadi.controller;

import com.abdelbahmadi.models.User;
import com.abdelbahmadi.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/users")
@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    @GetMapping
    public List<User> getUsers(){
        return userService.getAll();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable  Integer id) throws Exception{
       return userService.findUserById(id);
    }
    @GetMapping("/email/{email}")
    public User getUserByEmail(@PathVariable  String email) throws Exception{
        return userService.findUserByEmail(email);
    }
    @PostMapping
    public  User createUser(@RequestBody User user){

        return userService.registerUser(user);
    }
    @PutMapping("/{id}")
    public  User updateUser(@RequestBody User user, @PathVariable  Integer id)throws  Exception {

        return userService.updateUser(user, id);
    }
    @PostMapping("/follow/{followerId}/{followedId}")
    public User followUser(@PathVariable Integer followerId, @PathVariable Integer followedId) throws  Exception{
        return userService.followUser(followerId, followedId);
    }
    @GetMapping("/search/{query}")
    public List<User> searchUsers(@PathVariable String query) {
        return userService.searchUser(query);
    }
    @DeleteMapping("/{id}")
    public  String deleteUser(@PathVariable Integer id) {
        return "user deleted with success";
    }
    }
