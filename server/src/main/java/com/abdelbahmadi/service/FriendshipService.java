package com.abdelbahmadi.service;

import com.abdelbahmadi.exception.EntityNotFoundException;
import com.abdelbahmadi.exception.IllegalArgumentException;
import com.abdelbahmadi.response.FollowsDTO;
import com.abdelbahmadi.response.UserDTO;

import java.util.Set;

public interface FriendshipService {
    UserDTO followUser(Integer followerId, Integer followedId) throws EntityNotFoundException, IllegalArgumentException;
    Set<FollowsDTO> findFollowers(Integer id) throws EntityNotFoundException;
    Set<FollowsDTO> findFollowings(Integer id) throws EntityNotFoundException;
}
