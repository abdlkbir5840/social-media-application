package com.abdelbahmadi.response;

import lombok.*;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class FollowsDTO {
        private UserDTO follower;
        private UserDTO followed;
        private String status;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
}
