package com.abdelbahmadi.repository;

import com.abdelbahmadi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    public Optional< User> findUserByEmail(String email);

    @Query("select u from User u where  u.firstName like  %:query% OR u.lastName like  %:query% OR u.email like  %:query%")
    List<User> searchUser(@Param("query") String query);
}