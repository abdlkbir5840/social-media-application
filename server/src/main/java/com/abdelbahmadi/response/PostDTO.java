package com.abdelbahmadi.response;
import com.abdelbahmadi.models.Comment;
import com.abdelbahmadi.models.PostLike;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor @NoArgsConstructor @Getter @Setter @Builder
public class PostDTO {
    private Integer Id;
    private String caption;
    private String image;
    private String video;
    private  Integer countPostComments;
    private  Integer countPostLikes;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private UserDTO user;
    private List<UserDTO> likes = new ArrayList<>();
    private List<CommentDTO> comments = new ArrayList<>();
}
