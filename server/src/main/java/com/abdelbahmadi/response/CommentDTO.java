package com.abdelbahmadi.response;

import com.abdelbahmadi.models.CommentLike;
import com.abdelbahmadi.models.User;
import jakarta.persistence.ManyToOne;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter@Setter@AllArgsConstructor@NoArgsConstructor@Builder
public class CommentDTO {
    private  Integer id;
    private String content;
    private Integer countLikes;
    private UserDTO userDTO;
    private List<UserDTO> commentLikes = new ArrayList<>();
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
