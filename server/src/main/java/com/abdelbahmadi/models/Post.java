package com.abdelbahmadi.models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor @NoArgsConstructor @Getter @Setter @Builder
@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;
    private String caption;
    private String image;
    private String video;
    private LocalDateTime createdAt;
    @ManyToOne
    private User user;
    @OneToMany
    private List<User> likes;
}
