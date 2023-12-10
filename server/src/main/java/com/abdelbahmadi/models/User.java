package com.abdelbahmadi.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@AllArgsConstructor @NoArgsConstructor @Getter @Setter @ToString
@Builder
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer id;
    @NotBlank(message = "Invalid Name: Empty name")
    @NotNull(message = "Invalid Name: Name is NULL")
    private  String firstName;
    @NotBlank(message = "Invalid lastName: Empty lastName")
    @NotNull(message = "Invalid lastName: lastName is NULL")
    private  String lastName;
    @Email(message = "Invalid email")
    private  String email;
    @NotBlank(message = "Invalid lastName: Empty lastName")
    @NotNull(message = "Invalid lastName: lastName is NULL")
    private  String password;
    @NotBlank(message = "Invalid lastName: Empty lastName")
    @NotNull(message = "Invalid lastName: lastName is NULL")
    private  String gender;
    @JsonIgnore
    @ManyToMany
    private Set<User> followers = new HashSet<>();
    @JsonIgnore
    @ManyToMany
    private Set<User> followings = new HashSet<>();
    @JsonIgnore
    @OneToMany
    private List<Post> savedPost = new ArrayList<>();

}
