package com.abdelbahmadi.response;
import lombok.*;

@AllArgsConstructor @NoArgsConstructor@Getter@Setter@Builder
public class ProfileDTO {
    private  Integer id;
    private  Integer userId;
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
