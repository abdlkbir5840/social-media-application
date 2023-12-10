package com.abdelbahmadi.response;
import lombok.*;

import java.time.LocalDateTime;
@AllArgsConstructor @NoArgsConstructor @Getter @Setter @Builder
public class PostDTO {
    private Integer Id;
    private String caption;
    private String image;
    private String video;
    private LocalDateTime createdAt;
}
