package com.abdelbahmadi.models;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity@AllArgsConstructor@NoArgsConstructor@Getter@Setter@Builder
public class CommentLike {
    @Id@GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @ManyToOne
    private Comment comment;
    @ManyToOne
    private User user;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    @PrePersist
    protected void  onCreate(){createdAt = LocalDateTime.now();}
    @PreUpdate
    protected void onUpdate(){updatedAt =  LocalDateTime.now();}
}
