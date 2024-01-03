package com.abdelbahmadi.service;

import com.abdelbahmadi.exception.EntityNotFoundException;
import com.abdelbahmadi.exception.IllegalArgumentException;
import com.abdelbahmadi.response.FollowsDTO;
import com.abdelbahmadi.response.UserDTO;

import java.util.Set;

public interface FriendshipService {
    FollowsDTO followUser(Integer followerId, Integer followedId) throws EntityNotFoundException, IllegalArgumentException;
    Set<UserDTO> findFollowers(Integer id) throws EntityNotFoundException;
    Set<UserDTO> findFollowings(Integer id) throws EntityNotFoundException;
}
