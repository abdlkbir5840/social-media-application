package com.abdelbahmadi.response;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor@Builder
public class UserDTO {
    private  Integer id;
    private  String firstName;
    private  String lastName;
    private  String email;
    private  String gender;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
