package com.abdelbahmadi.service;

import com.abdelbahmadi.exception.AccessDeniedException;
import com.abdelbahmadi.exception.EntityNotFoundException;
import com.abdelbahmadi.models.Post;
import com.abdelbahmadi.models.User;
import com.abdelbahmadi.repository.PostRepository;
import com.abdelbahmadi.repository.UserRepository;
import com.abdelbahmadi.response.PostDTO;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService{
    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final UserService userService;
    private final ModelMapper modelMapper;
    @Override
    public List<PostDTO> getAll() {
        List<PostDTO> postDTOS = postRepository.findAll().stream().map(post
                -> modelMapper.map(post,PostDTO.class)).collect(Collectors.toList());
        return postDTOS;
    }
    @Override
    public Post findPostById(Integer id) throws EntityNotFoundException {
        Post post = postRepository.findById(id).orElseThrow(()
                ->new EntityNotFoundException("Post with ID "+id+" not found"));
        return post;
    }
    @Override
    public List<PostDTO> findPostByUserId(Integer userId) throws EntityNotFoundException {
        userService.findUserById(userId);
        List<PostDTO> postDTOS = postRepository.findPostByUserId(userId).stream().map(post
                -> modelMapper.map(post, PostDTO.class)).collect(Collectors.toList());
        return postDTOS;
    }
    @Override
    public PostDTO createPost(PostDTO postDTO, Integer userId) throws EntityNotFoundException {
        userService.findUserById(userId);
        Post newPost = modelMapper.map(postDTO, Post.class);
        return modelMapper.map(postRepository.save(newPost), PostDTO.class);
    }
    @Override
    public PostDTO updatePost(PostDTO postDTO, Integer postId, Integer userId) throws EntityNotFoundException, AccessDeniedException {
        userService.findUserById(userId);
        Post post = this.findPostById(postId);
        if(post.getUser().getId()!=userId) throw  new AccessDeniedException("Access Denied: You do not have the right to modify other users' posts");
        Post newPost = modelMapper.map(postDTO, Post.class);
        newPost.setId(postId);
        return modelMapper.map(postRepository.save(newPost), PostDTO.class);
    }
    @Override
    public PostDTO savePost(Integer postId, Integer userId) throws EntityNotFoundException {
        User user = userRepository.findById(userId).orElseThrow(()
                ->new EntityNotFoundException("User with ID "+userId+" not found"));
        Post post = this.findPostById(postId);
        if(user.getSavedPost().contains(post)){
            user.getSavedPost().remove(postId);
        }else {
            user.getSavedPost().add(post);
        }
        userRepository.save(user);
        return modelMapper.map(post, PostDTO.class);
    }

    @Override
    public List<PostDTO>  findAllSavedPost(Integer userId) throws EntityNotFoundException {
        User user = userRepository.findById(userId).orElseThrow(()
                ->new EntityNotFoundException("User with ID "+userId+" not found"));
        List<PostDTO> postDTOS = user.getSavedPost().stream().map(post
                -> modelMapper.map(post, PostDTO.class) ).collect(Collectors.toList());
        return postDTOS;
    }
    @Override
    public PostDTO likePost(Integer postId, Integer userId) throws EntityNotFoundException {
        User user = userRepository.findById(userId).orElseThrow(()
                ->new EntityNotFoundException("User with ID "+userId+" not found"));
        Post post = this.findPostById(postId);
        if(post.getLikes().contains(user)){
            post.getLikes().remove(user);
        }else {
            post.getLikes().add(user);
        }
        postRepository.save(post);
        return modelMapper.map(post, PostDTO.class);
    }
    @Override
    public void deletePost(Integer postId, Integer userId) throws EntityNotFoundException, AccessDeniedException {
        userService.findUserById(userId);
        Post post = this.findPostById(postId);
        if(post.getUser().getId()!=userId) throw  new AccessDeniedException("Access Denied: You do not have the right to delete other users' posts");
        postRepository.delete(post);
    }
}