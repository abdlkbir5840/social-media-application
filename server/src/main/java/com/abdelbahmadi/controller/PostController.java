package com.abdelbahmadi.controller;

import com.abdelbahmadi.models.Post;
import com.abdelbahmadi.response.PostDTO;
import com.abdelbahmadi.response.PostRequest;
import com.abdelbahmadi.response.UserDTO;
import com.abdelbahmadi.service.PostService;
import com.abdelbahmadi.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/posts")
@RequiredArgsConstructor
public class PostController {
    private  final PostService postService;
    private  final UserService userService;

    @GetMapping
    public List<PostDTO> getPosts(){
        return  this.postService.getAll();
    }
    @GetMapping("/{id}")
    public Post getPostsById(@PathVariable Integer id){
        return  this.postService.findPostById(id);
    }
    @GetMapping("/userPosts/{id}")
    public List<PostDTO> getPostsByUserId(@RequestHeader("Authorization") String bearerToken, @PathVariable Integer id){
        UserDTO user = userService.findUserByJwt(bearerToken);
        return  this.postService.findPostByUserId(id);
    }
    @PostMapping
    public PostDTO createPost(@RequestHeader("Authorization") String bearerToken, @RequestBody PostRequest postRequest){
        UserDTO user = userService.findUserByJwt(bearerToken);
        return  this.postService.createPost(postRequest, user.getId());
    }
    @PutMapping("/{postId}")
    public PostDTO updatePost(@RequestHeader("Authorization") String bearerToken, @RequestBody PostDTO postDTO, @PathVariable Integer postId){
        UserDTO user = userService.findUserByJwt(bearerToken);
        return  this.postService.updatePost(postDTO, postId, user.getId());
    }
    @PostMapping("/save/{postId}")
    public PostDTO savePost( @RequestHeader("Authorization") String bearerToken, @PathVariable Integer postId){
        UserDTO user = userService.findUserByJwt(bearerToken);
        return  this.postService.savePost( postId, user.getId());
    }
    @GetMapping("/savedPosts")
    public List<PostDTO> getSavePost(@RequestHeader("Authorization") String bearerToken){
        UserDTO user = userService.findUserByJwt(bearerToken);
        return  this.postService.findAllSavedPost(user.getId());
    }
    @DeleteMapping("/{postId}")
    public  void  deletePost( @RequestHeader("Authorization") String bearerToken, @PathVariable Integer postId){
        UserDTO user = userService.findUserByJwt(bearerToken);
          this.postService.deletePost( postId, user.getId());
    }
}
