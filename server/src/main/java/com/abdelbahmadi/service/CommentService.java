package com.abdelbahmadi.service;

import com.abdelbahmadi.models.Comment;
import com.abdelbahmadi.response.CommentDTO;
import com.abdelbahmadi.response.CommentRequest;

public interface CommentService {
     CommentDTO createComment(CommentRequest commentRequest, Integer postId, Integer userId);
     CommentDTO updateComment(CommentRequest commentRequest, Integer commentId, Integer userId);
     void deleteComment(Integer commentId, Integer userId);
     Comment findCommentById(Integer commentId);

}
