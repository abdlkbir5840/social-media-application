package com.abdelbahmadi.service;

import com.abdelbahmadi.exception.EntityNotFoundException;
import com.abdelbahmadi.mapper.ApplicationMapper;
import com.abdelbahmadi.models.*;
import com.abdelbahmadi.repository.CommentRepository;
import com.abdelbahmadi.repository.PostRepository;
import com.abdelbahmadi.repository.UserRepository;
import com.abdelbahmadi.response.CommentDTO;
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
    private  final CommentRepository commentRepository;
    private final ModelMapper modelMapper;
    private final ApplicationMapper applicationMapper;

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
        return applicationMapper.toPostDto(savedPost);
    }
    public  boolean isUserAlreadyLikePost(User user, Post post){
        return  post.getLikes().stream().anyMatch(like
                ->like.getUser().equals(user));
    }
    @Override
    public CommentDTO likeComment(Integer commentId, Integer userId) {
        User user = userRepository.findById(userId).orElseThrow(()
                ->new EntityNotFoundException("User with ID "+userId+"not found"));
        Comment comment = commentRepository.findById(commentId).orElseThrow(()
                ->new EntityNotFoundException("Comment with ID "+commentId+"not found"));
        if(isAlreadyLikeComment(user, comment)){
            CommentLike toRemove = comment.getCommentLikes()
                    .stream().
                    filter(like-> like.getUser().equals(user)).
                    findFirst().
                    orElseThrow(()->new EntityNotFoundException("Like not found"));
            comment.getCommentLikes().remove(toRemove);
        }else{
            CommentLike commentLike = new CommentLike();
            commentLike.setComment(comment);
            commentLike.setUser(user);
            comment.getCommentLikes().add(commentLike);
        }
        Comment  savedComment = commentRepository.save(comment);
        return applicationMapper.toCommentDto(savedComment);
    }
    private boolean isAlreadyLikeComment(User user, Comment comment){
        return comment.getCommentLikes().stream().anyMatch(commentLike -> commentLike.getUser().equals(user));
    }
}
