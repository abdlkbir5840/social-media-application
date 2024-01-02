package com.abdelbahmadi.service;

import com.abdelbahmadi.exception.EntityNotFoundException;
import com.abdelbahmadi.response.PostDTO;

public interface LikeService {
    PostDTO likePost(Integer postId, Integer userId) throws EntityNotFoundException;
}
