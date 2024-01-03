package com.abdelbahmadi.controller;


import com.abdelbahmadi.models.Comment;
import com.abdelbahmadi.response.CommentDTO;
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
    private final LikeService likeService;
    @PostMapping("/post/{postId}")
    public PostDTO likePost(@RequestHeader("Authorization") String bearerToken, @PathVariable Integer postId){
        UserDTO user = userService.findUserByJwt(bearerToken);
        return  likeService.likePost( postId, user.getId());
    }
    @PostMapping("/comment/{commentId}")
    public CommentDTO likeComment(@RequestHeader("Authorization") String bearerToken, @PathVariable Integer commentId){
        UserDTO user = userService.findUserByJwt(bearerToken);
        return  likeService.likeComment( commentId, user.getId());
    }
}
