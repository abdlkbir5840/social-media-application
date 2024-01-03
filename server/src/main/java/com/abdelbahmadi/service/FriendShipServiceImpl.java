package com.abdelbahmadi.service;

import com.abdelbahmadi.exception.EntityNotFoundException;
import com.abdelbahmadi.exception.IllegalArgumentException;
import com.abdelbahmadi.mapper.ApplicationMapper;
import com.abdelbahmadi.models.Follows;
import com.abdelbahmadi.models.User;
import com.abdelbahmadi.repository.FollowsRepository;
import com.abdelbahmadi.repository.UserRepository;
import com.abdelbahmadi.response.FollowsDTO;
import com.abdelbahmadi.response.UserDTO;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class FriendShipServiceImpl implements FriendshipService{
    private final UserRepository userRepository;
    private final FollowsRepository followsRepository;
    private final ApplicationMapper applicationMapper;
    @Override
    public FollowsDTO followUser(Integer followerId, Integer followedId) throws EntityNotFoundException, IllegalArgumentException {
        if (followerId.equals(followedId)) {
            throw new IllegalArgumentException("Follower ID cannot be equal to Followed ID");
        }
        User follower = userRepository.findById(followerId)
                .orElseThrow(() -> new EntityNotFoundException("User with ID " + followerId + " not found"));
        User followed = userRepository.findById(followedId)
                .orElseThrow(() -> new EntityNotFoundException("User with ID " + followedId + " not found"));
        Optional<Follows> existingFollow = followsRepository.findByFollowerAndFollowing(follower, followed);
        if (existingFollow.isPresent()) {
            followsRepository.delete(existingFollow.get());
            return applicationMapper.toFollowDto(existingFollow.get());
        } else {
            Follows follows = new Follows();
            follows.setFollower(follower);
            follows.setFollowing(followed);
            follows.setStatus("Pending");
            Follows savedFollows = followsRepository.save(follows);
            return applicationMapper.toFollowDto(savedFollows);
        }
    }
    @Override
    public Set<UserDTO> findFollowers(Integer userId) throws EntityNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found with ID: " + userId));
        return user.getFollowers().stream()
                .map(follower -> applicationMapper.toUserDto(follower.getFollower()))
                .collect(Collectors.toSet());
    }
    @Override
    public Set<UserDTO> findFollowings(Integer userId) throws EntityNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found with ID: " + userId));
        return user.getFollowing().stream()
                .map(following ->applicationMapper.toUserDto(following.getFollowing()))
                .collect(Collectors.toSet());
    }
}
