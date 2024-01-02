package com.abdelbahmadi.response;

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
    private  String password;
    private  String gender;
}
