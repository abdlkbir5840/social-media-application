package com.abdelbahmadi.response;
import com.abdelbahmadi.models.PostLike;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor @NoArgsConstructor @Getter @Setter @Builder
public class PostDTO {
    private Integer Id;
    private String caption;
    private String image;
    private String video;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private UserDTO user;
    private List<UserDTO> likes;
}
