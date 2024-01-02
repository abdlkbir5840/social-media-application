package com.abdelbahmadi.controller;

import com.abdelbahmadi.response.PostDTO;
import com.abdelbahmadi.response.UserDTO;
import com.abdelbahmadi.service.LikeService;
import com.abdelbahmadi.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/likes")
@RequiredArgsConstructor
public class LikeController {
    private  final UserService userService;
    private final LikeService likePost;
    @PostMapping("/post/{postId}")
    public PostDTO likePost(@RequestHeader("Authorization") String bearerToken, @PathVariable Integer postId){
        UserDTO user = userService.findUserByJwt(bearerToken);
        return  likePost.likePost( postId, user.getId());
    }
}
