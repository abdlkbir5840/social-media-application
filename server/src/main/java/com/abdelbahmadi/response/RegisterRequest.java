package com.abdelbahmadi.response;

import com.fasterxml.jackson.annotation.JsonCreator;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private  Integer id;
    private  String firstName;
    private  String lastName;
    private  String email;
    private  String telephone;
    private  String address;
    private  String country;
    private  String city;
    private  String password;
    private  String gender;
}
