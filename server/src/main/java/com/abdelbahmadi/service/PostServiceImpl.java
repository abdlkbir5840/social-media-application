package com.abdelbahmadi.service;

import com.abdelbahmadi.exception.AccessDeniedException;
import com.abdelbahmadi.exception.EntityNotFoundException;
import com.abdelbahmadi.mapper.ApplicationMapper;
import com.abdelbahmadi.models.Post;
import com.abdelbahmadi.models.User;
import com.abdelbahmadi.repository.PostRepository;
import com.abdelbahmadi.repository.UserRepository;
import com.abdelbahmadi.response.PostDTO;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService{
    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final UserService userService;
    private final ModelMapper modelMapper;
    private final ApplicationMapper applicationMapper;
    @Override
    public List<PostDTO> getAll() {
        List<PostDTO> postDTOS = postRepository.findAll().stream().map(post
                -> applicationMapper.toPostDto(post)).collect(Collectors.toList());
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
        List<PostDTO> postDTOS = postRepository.findPostByUserId(userId).stream()
                .map(post -> applicationMapper.toPostDto(post)).collect(Collectors.toList());
        return postDTOS;
    }
    @Override
    public PostDTO createPost(PostDTO postDTO, Integer userId) throws EntityNotFoundException {
        User user = userRepository.findById(userId).orElseThrow(()
                ->new EntityNotFoundException("User with ID "+userId+" not found"));
        Post newPost = new Post();
        newPost.setCaption(postDTO.getCaption());
        newPost.setImage(postDTO.getImage());
        newPost.setVideo(postDTO.getVideo());
        newPost.setUser(user);
        return applicationMapper.toPostDto(postRepository.save(newPost));
    }
    @Override
    public PostDTO updatePost(PostDTO postDTO, Integer postId, Integer userId) throws EntityNotFoundException, AccessDeniedException {
        Post post = this.findPostById(postId);
        if(post.getUser().getId()!=userId) throw  new AccessDeniedException("Access Denied: You do not have the right to modify other users' posts");
        post.setImage(postDTO.getImage());
        post.setCaption(postDTO.getCaption());
        post.setVideo(postDTO.getVideo());
        post.setId(postId);
        Post updatedPost = postRepository.save(post);
        return applicationMapper.toPostDto(updatedPost);
    }
    @Override
    public PostDTO savePost(Integer postId, Integer userId) throws EntityNotFoundException {
        User user = userRepository.findById(userId).orElseThrow(()
                ->new EntityNotFoundException("User with ID "+userId+" not found"));
        Post post = this.findPostById(postId);
        if(user.getSavedPost().contains(post)){
            user.getSavedPost().remove(post);
        }else {
            user.getSavedPost().add(post);
        }
        userRepository.save(user);
        return applicationMapper.toPostDto(post);
    }
    @Override
    public List<PostDTO>  findAllSavedPost(Integer userId) throws EntityNotFoundException {
        User user = userRepository.findById(userId).orElseThrow(()
                ->new EntityNotFoundException("User with ID "+userId+" not found"));
        List<PostDTO> postDTOS = user.getSavedPost().stream()
                .map(post ->applicationMapper.toPostDto(post)).collect(Collectors.toList());
        return postDTOS;
    }
    @Override
    public void deletePost(Integer postId, Integer userId) throws EntityNotFoundException, AccessDeniedException {
        Post post = this.findPostById(postId);
        if(post.getUser().getId()!=userId) throw  new AccessDeniedException("Access Denied: You do not have the right to delete other users' posts");
        for (User u : post.getSavedPostByUsers()) {
            u.getSavedPost().remove(post);
        }
        postRepository.delete(post);
    }
}
