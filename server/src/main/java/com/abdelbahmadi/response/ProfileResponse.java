package com.abdelbahmadi.response;

import lombok.*;

import java.util.List;

@AllArgsConstructor @NoArgsConstructor @Getter @Setter @Builder
public class ProfileResponse {
    private ProfileDTO profileDTO;
    private List<PostDTO> postDTOList;
}
