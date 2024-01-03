package com.abdelbahmadi.controller;

import com.abdelbahmadi.response.FollowsDTO;
import com.abdelbahmadi.response.UserDTO;
import com.abdelbahmadi.service.FriendshipService;
import com.abdelbahmadi.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/friendShips")
public class FriendShipController {
    private final UserService userService;
    private final FriendshipService friendshipService;
    @PostMapping("/follow/{followedId}")
    public FollowsDTO followUser(@RequestHeader("Authorization") String bearerToken, @PathVariable Integer followedId) {
        UserDTO user = userService.findUserByJwt(bearerToken);
        return friendshipService.followUser(user.getId(), followedId);
    }
    @GetMapping("/followers/{id}")
    public Set<UserDTO> getFollowers(@PathVariable Integer id)   {
        return friendshipService.findFollowers(id);
    }
    @GetMapping("/followings/{id}")
    public Set<UserDTO> getFollowings(@PathVariable Integer id)   {
        return friendshipService.findFollowings(id);
    }
}
