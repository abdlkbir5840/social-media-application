package com.abdelbahmadi.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;


@AllArgsConstructor @NoArgsConstructor @Getter @Setter @ToString
@Builder
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer id;
    @NotBlank(message = "Invalid first name: Empty first name")
    @NotNull(message = "Invalid first name: first name is NULL")
    private  String firstName;
    @NotBlank(message = "Invalid last name: Empty last name")
    @NotNull(message = "Invalid last name: last name is NULL")
    private  String lastName;
    @NotBlank(message = "Invalid telephone: Empty telephone")
    @NotNull(message = "Invalid telephone: telephone is NULL")
    private  String telephone;
    @NotBlank(message = "Invalid address: Empty address")
    @NotNull(message = "Invalid address: address is NULL")
    private  String address;
    @NotBlank(message = "Invalid country: Empty country")
    @NotNull(message = "Invalid country: country is NULL")
    private  String country;
    @NotBlank(message = "Invalid city: Empty city")
    @NotNull(message = "Invalid city: city is NULL")
    private  String city;
    @NotBlank(message = "Invalid email: Empty email")
    @NotNull(message = "Invalid email: email is NULL")
    @Email(message = "Invalid email")
    private  String email;
    @NotBlank(message = "Invalid password: Empty password")
    @NotNull(message = "Invalid password: password is NULL")
    private  String password;
    @NotBlank(message = "Invalid gender: Empty gender")
    @NotNull(message = "Invalid gender: gender is NULL")
    private  String gender;
    @OneToMany(mappedBy = "following")
    private Set<Follows> followers;
    @OneToMany(mappedBy = "follower")
    private Set<Follows> following;
    @JsonIgnore
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<Post> savedPost = new ArrayList<>();
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private  List<Comment> comments = new ArrayList<>();
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
     @JsonIgnore
    private List<CommentLike> commentLikes = new ArrayList<>();
    @OneToOne(cascade = CascadeType.ALL)
    private  Profile profile;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
    public List<Post> getSavedPost() {
        return savedPost;
    }

}
