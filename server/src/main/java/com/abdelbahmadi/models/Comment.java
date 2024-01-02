package com.abdelbahmadi.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity@AllArgsConstructor@NoArgsConstructor@Getter@Setter@Builder
public class Comment {
    @Id@GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer id;
    private String content;
    @ManyToOne
    private User user;
    @ManyToOne
    private Post post;
    @OneToMany(mappedBy = "comment", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<CommentLike> commentLikes = new ArrayList<>();
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    @PrePersist
    protected void  onCreate(){createdAt = LocalDateTime.now();}
    @PreUpdate
    protected void onUpdate(){updatedAt =  LocalDateTime.now();}
}
