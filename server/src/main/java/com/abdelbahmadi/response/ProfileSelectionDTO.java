package com.abdelbahmadi.response;

import lombok.*;

@AllArgsConstructor @NoArgsConstructor @Getter @Setter @Builder
public class ProfileSelectionDTO {
    private  Integer userId;
    private  Integer profileId;
    private  String firstName;
    private  String lastName;
    private String profileImg;
}
