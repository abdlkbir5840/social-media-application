package com.abdelbahmadi.response;

import lombok.*;

@AllArgsConstructor @NoArgsConstructor @Getter @Setter @Builder
public class PostRequest {
    private String caption;
    private String image;
}
