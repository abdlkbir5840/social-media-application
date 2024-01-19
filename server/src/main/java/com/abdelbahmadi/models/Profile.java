package com.abdelbahmadi.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@AllArgsConstructor @NoArgsConstructor @Getter @Setter @Builder
@Entity
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer id;
    private  String firstName;
    private  String lastName;
    private  String telephone;
    private  String address;
    private  String gender;
    private  String country;
    private  String city;
    private String coverImg;
    private String profileImg;
    private String bio;
    private String birthday;
}
