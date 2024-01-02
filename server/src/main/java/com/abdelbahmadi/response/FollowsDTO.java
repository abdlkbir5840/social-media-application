package com.abdelbahmadi.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class FollowsDTO {
        private Integer id;
        private String firstName;
        private String lastName;
        private String email;
        private String gender;
        private String status;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;

}
