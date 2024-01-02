package com.abdelbahmadi.controller;
import com.abdelbahmadi.response.FollowsDTO;
import com.abdelbahmadi.response.UserDTO;
import com.abdelbahmadi.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RequestMapping("/api/v1/users")
@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    @GetMapping
    public List<UserDTO> getUsers(){return userService.getAll();}
    @GetMapping("/{id}")
    public UserDTO getUserById(@PathVariable  Integer id)  {
       return userService.findUserById(id);
    }
    @GetMapping("/email/{email}")
    public UserDTO getUserByEmail(@PathVariable  String email) {
        return userService.findUserByEmail(email);
    }
    @PutMapping
    public  UserDTO updateUser(@RequestHeader("Authorization") String bearerToken,@RequestBody UserDTO userDTO) {
        UserDTO user = userService.findUserByJwt(bearerToken);
        return userService.updateUser(userDTO, user.getId());
    }
    @GetMapping("/search")
    public List<UserDTO> searchUsers(@RequestParam("query") String query) {
        return userService.searchUser(query);
    }
    @DeleteMapping("/{id}")
    public  void deleteUser(@PathVariable Integer id)  {
        userService.removeUser(id);
    }
    @GetMapping("/profile")
    public  UserDTO getUserFromToken(@RequestHeader("Authorization") String bearerToken)  {
        UserDTO user = userService.findUserByJwt(bearerToken);
       return user;
    }
}
