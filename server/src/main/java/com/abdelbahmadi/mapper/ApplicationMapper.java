package com.abdelbahmadi.mapper;

import com.abdelbahmadi.models.*;
import com.abdelbahmadi.response.*;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class ApplicationMapper {
    public UserDTO toUserDto(User user){
        return UserDTO.builder()
                .id(user.getId())
                .firstName(user.getProfile().getFirstName())
                .lastName(user.getProfile().getLastName())
                .email(user.getEmail())
                .gender(user.getProfile().getGender())
                .createdAt(user.getCreatedAt())
                .updatedAt(user.getUpdatedAt())
                .build();
    }
    public CommentDTO toCommentDto(Comment comment){
        return CommentDTO.builder()
                .id(comment.getId())
                .content(comment.getContent())
                .countLikes(comment.getCommentLikes().size())
                .userDTO(this.toUserDto(comment.getUser()))
                .commentLikes(comment.getCommentLikes().stream().map(commentLike
                        -> this.toUserDto(commentLike.getUser())).collect(Collectors.toList()))
                .createdAt(comment.getCreatedAt())
                .updatedAt(comment.getUpdatedAt())
                .build();
    }
    public PostDTO toPostDto(Post post){
        return PostDTO.builder()
                .Id(post.getId())
                .caption(post.getCaption())
                .image(post.getImage())
                .countPostLikes(post.getLikes().size())
                .countPostComments(post.getComments().size())
                .user(this.toUserDto(post.getUser()))
                .likes(post.getLikes().stream().map(postLike
                        -> this.toUserDto(postLike.getUser())).collect(Collectors.toList()))
                .comments(post.getComments().stream().map(this::toCommentDto).collect(Collectors.toList()))
                .createdAt(post.getCreatedAt())
                .updatedAt(post.getUpdatedAt())
                .build();
    }
    public FollowsDTO toFollowDto(Follows follows){
        return FollowsDTO.builder()
                .follower(this.toUserDto(follows.getFollower()))
                .followed(this.toUserDto(follows.getFollowing()))
                .status(follows.getStatus())
                .createdAt(follows.getCreatedAt())
                .updatedAt(follows.getUpdatedAt())
                .build();
    }
    public ProfileSelectionDTO toProfileSelectionDTO(Profile profile){
        return ProfileSelectionDTO.builder()
                .profileId(profile.getId())
                .firstName(profile.getFirstName())
                .lastName(profile.getLastName())
                .profileImg(profile.getProfileImg())
                .build();
    }
    public ProfileDTO toProfileDTO(User user){
        return ProfileDTO.builder()
                .id(user.getProfile().getId())
                .userId(user.getId())
                .firstName(user.getProfile().getFirstName())
                .lastName(user.getProfile().getLastName())
                .profileImg(user.getProfile().getProfileImg())
                .address(user.getProfile().getAddress())
                .telephone(user.getProfile().getTelephone())
                .gender(user.getProfile().getGender())
                .country(user.getProfile().getCountry())
                .city(user.getProfile().getCity())
                .coverImg(user.getProfile().getCoverImg())
                .profileImg(user.getProfile().getProfileImg())
                .bio(user.getProfile().getBio())
                .birthday(user.getProfile().getBirthday())
                .build();
    }
}
