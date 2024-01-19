package com.abdelbahmadi.repository;

import com.abdelbahmadi.models.Profile;
import com.abdelbahmadi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Integer> {
    @Query("select p from Profile p where  p.firstName like  %:query% OR p.lastName like  %:query% ")
    List<Profile> searchUser(@Param("query") String query);
}
