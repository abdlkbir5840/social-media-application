package com.abdelbahmadi.service;

import com.abdelbahmadi.exception.AccessDeniedException;
import com.abdelbahmadi.exception.EntityNotFoundException;
import com.abdelbahmadi.models.Post;
import com.abdelbahmadi.response.PostDTO;

import java.util.List;

public interface PostService {
    List<PostDTO> getAll();
    Post findPostById(Integer id)throws EntityNotFoundException;
    List<PostDTO> findPostByUserId (Integer userId) throws EntityNotFoundException;
    PostDTO createPost(PostDTO postDTO, Integer userId) throws  EntityNotFoundException;
    PostDTO updatePost(PostDTO postDTO, Integer postId, Integer userId) throws  EntityNotFoundException, AccessDeniedException;
    PostDTO savePost(Integer postId, Integer userId) throws EntityNotFoundException;
    List<PostDTO> findAllSavedPost(Integer userId) throws EntityNotFoundException;
    PostDTO likePost(Integer postId, Integer userId) throws EntityNotFoundException;
    void  deletePost(Integer postId, Integer userId)throws EntityNotFoundException, AccessDeniedException;
}
