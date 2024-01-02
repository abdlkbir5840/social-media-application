package com.abdelbahmadi.service;

import com.abdelbahmadi.exception.EntityNotFoundException;
import com.abdelbahmadi.models.Post;
import com.abdelbahmadi.models.PostLike;
import com.abdelbahmadi.models.User;
import com.abdelbahmadi.repository.PostRepository;
import com.abdelbahmadi.repository.UserRepository;
import com.abdelbahmadi.response.PostDTO;
import com.abdelbahmadi.response.UserDTO;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class LikeServiceImpl implements LikeService{
    private final PostRepository postRepository;
    private final PostService postService;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    @Override
    //@Transactional
    public PostDTO likePost(Integer postId, Integer userId) throws EntityNotFoundException {
        User user = userRepository.findById(userId).orElseThrow(()
                ->new EntityNotFoundException("User with ID "+userId+" not found"));
        Post post = postService.findPostById(postId);
        if(isUserAlreadyLikePost(user, post)){
            PostLike toRemove = post.getLikes().stream()
                    .filter(like -> like.getUser().equals(user))
                    .findFirst()
                    .orElseThrow(()->new EntityNotFoundException("Like not found"));
            post.getLikes().remove(toRemove);
        }else {
            PostLike  postLike = new PostLike();
            postLike.setPost(post);
            postLike.setUser(user);
            post.getLikes().add(postLike);
        }
        Post savedPost = postRepository.save(post);
        PostDTO postDTO = modelMapper.map(savedPost, PostDTO.class);
        postDTO.setLikes(savedPost.getLikes().stream().map(like->modelMapper.map(like.getUser(), UserDTO.class)).collect(Collectors.toList()));
        return postDTO;
    }
    public  boolean isUserAlreadyLikePost(User user, Post post){
        return  post.getLikes().stream().anyMatch(like
                ->like.getUser().equals(user));
    }
}
