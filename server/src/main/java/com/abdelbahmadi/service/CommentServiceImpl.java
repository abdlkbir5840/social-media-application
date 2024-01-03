package com.abdelbahmadi.service;

import com.abdelbahmadi.exception.AccessDeniedException;
import com.abdelbahmadi.exception.EntityNotFoundException;
import com.abdelbahmadi.mapper.ApplicationMapper;
import com.abdelbahmadi.models.Comment;
import com.abdelbahmadi.models.Post;
import com.abdelbahmadi.models.User;
import com.abdelbahmadi.repository.CommentRepository;
import com.abdelbahmadi.repository.PostRepository;
import com.abdelbahmadi.repository.UserRepository;
import com.abdelbahmadi.response.CommentDTO;
import com.abdelbahmadi.response.CommentRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService{
    private  final CommentRepository commentRepository;
    private  final UserRepository userRepository;
    private  final PostRepository postRepository;
    private final ApplicationMapper applicationMapper;
    @Override
    public CommentDTO createComment(CommentRequest commentRequest, Integer postId, Integer userId) {
        User user = userRepository.findById(userId).orElseThrow(()
                ->new EntityNotFoundException("User with ID "+userId+" not found"));
        Post post = postRepository.findById(postId).orElseThrow(()
                ->new EntityNotFoundException("Post with ID "+postId+" not found"));
        Comment comment = new Comment();
        comment.setContent(commentRequest.getContent());
        comment.setUser(user);
        comment.setPost(post);
        Comment savedComment = commentRepository.save(comment);
        return applicationMapper.toCommentDto(savedComment);
    }
    @Override
    public CommentDTO updateComment(CommentRequest commentRequest, Integer commentId, Integer userId) {
        Comment comment = commentRepository.findById(commentId).orElseThrow(()
                ->new EntityNotFoundException("Comment with ID "+commentId+" not found"));
        if(comment.getUser().getId()!=userId){
            throw new AccessDeniedException("Access Denied: You do not have the right to modify other users' comments");
        }
        comment.setContent(commentRequest.getContent());
        return applicationMapper.toCommentDto(commentRepository.save(comment));
    }
    @Override
    public void deleteComment(Integer commentId, Integer userId) {
        Comment comment = commentRepository.findById(commentId).orElseThrow(()
                ->new EntityNotFoundException("Comment with ID "+commentId+" not found"));
        if(comment.getUser().getId()!=userId){
            throw new AccessDeniedException("Access Denied: You do not have the right to modify other users' comments");
        }
        commentRepository.delete(comment);
    }
    @Override
    public Comment findCommentById(Integer commentId) {
        Comment existingComment = commentRepository.findById(commentId).orElseThrow(()
                ->new EntityNotFoundException("Comment with ID "+commentId+"not found"));
        return existingComment;
    }
}
