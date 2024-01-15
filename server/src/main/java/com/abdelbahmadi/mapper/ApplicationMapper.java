package com.abdelbahmadi.mapper;

import com.abdelbahmadi.models.Comment;
import com.abdelbahmadi.models.Follows;
import com.abdelbahmadi.models.Post;
import com.abdelbahmadi.models.User;
import com.abdelbahmadi.response.CommentDTO;
import com.abdelbahmadi.response.FollowsDTO;
import com.abdelbahmadi.response.PostDTO;
import com.abdelbahmadi.response.UserDTO;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class ApplicationMapper {
    public UserDTO toUserDto(User user){
        UserDTO userDTO = UserDTO.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .gender(user.getGender())
                .createdAt(user.getCreatedAt())
                .updatedAt(user.getUpdatedAt())
                .build();
        return  userDTO;
    }
    public CommentDTO toCommentDto(Comment comment){
        CommentDTO commentDTO = CommentDTO.builder()
                .id(comment.getId())
                .content(comment.getContent())
                .countLikes(comment.getCommentLikes().size())
                .userDTO(this.toUserDto(comment.getUser()))
                .commentLikes(comment.getCommentLikes().stream().map(commentLike
                        -> this.toUserDto(commentLike.getUser())).collect(Collectors.toList()))
                .createdAt(comment.getCreatedAt())
                .updatedAt(comment.getUpdatedAt())
                .build();
        return  commentDTO;
    }
    public PostDTO toPostDto(Post post){
        PostDTO postDTO = PostDTO.builder()
                .Id(post.getId())
                .caption(post.getCaption())
                .image(post.getImage())
                .countPostLikes(post.getLikes().size())
                .countPostComments(post.getComments().size())
                .user(this.toUserDto(post.getUser()))
                .likes(post.getLikes().stream().map(postLike
                        -> this.toUserDto(postLike.getUser())).collect(Collectors.toList()))
                .comments(post.getComments().stream().map(comment
                        -> this.toCommentDto(comment)).collect(Collectors.toList()))
                .createdAt(post.getCreatedAt())
                .updatedAt(post.getUpdatedAt())
                .build();
        return postDTO;
    }
    public FollowsDTO toFollowDto(Follows follows){
        FollowsDTO followsDTO = FollowsDTO.builder()
                .follower(this.toUserDto(follows.getFollower()))
                .followed(this.toUserDto(follows.getFollowing()))
                .status(follows.getStatus())
                .createdAt(follows.getCreatedAt())
                .updatedAt(follows.getUpdatedAt())
                .build();
        return followsDTO;
    }
}
