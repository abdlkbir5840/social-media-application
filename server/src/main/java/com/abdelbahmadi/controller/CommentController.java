package com.abdelbahmadi.controller;

import com.abdelbahmadi.response.CommentDTO;
import com.abdelbahmadi.response.CommentRequest;
import com.abdelbahmadi.response.UserDTO;
import com.abdelbahmadi.service.CommentService;
import com.abdelbahmadi.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/comments")
@RequiredArgsConstructor
public class CommentController {
    private final CommentService commentService;
    private final UserService userService;
    @PostMapping("post/{postId}")
    public CommentDTO createComment(@RequestHeader("Authorization") String bearerToken,
                                    @RequestBody CommentRequest commentRequest,
                                    @PathVariable Integer postId){
        UserDTO user = userService.findUserByJwt(bearerToken);
        return commentService.createComment(commentRequest, postId, user.getId());
    }
    @PutMapping("/{commentId}")
    public CommentDTO updateComment(@RequestHeader("Authorization") String bearerToken,
                                    @RequestBody CommentRequest commentRequest,
                                    @PathVariable Integer commentId){
        UserDTO user = userService.findUserByJwt(bearerToken);
        return commentService.updateComment(commentRequest, commentId, user.getId());
    }
    @DeleteMapping("/{commentId}")
    public void deleteComment(@RequestHeader("Authorization") String bearerToken,
                                    @PathVariable Integer commentId){
        UserDTO user = userService.findUserByJwt(bearerToken);
         commentService.deleteComment(commentId, user.getId());
    }
}
