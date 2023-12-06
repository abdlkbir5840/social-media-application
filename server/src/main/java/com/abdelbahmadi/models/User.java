package com.abdelbahmadi.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@AllArgsConstructor @NoArgsConstructor @Getter @Setter @ToString
@Builder
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer id;
    private  String firstName;
    private  String lastName;
    private  String email;
    private  String password;
    private  String gender;
    @JsonIgnore
    @OneToMany
    private List<User> followers;
    @JsonIgnore
    @OneToMany
    private List<User> followings;
}
