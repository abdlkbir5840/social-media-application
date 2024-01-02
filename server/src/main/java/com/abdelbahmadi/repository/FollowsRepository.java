package com.abdelbahmadi.repository;

import com.abdelbahmadi.models.Follows;
import com.abdelbahmadi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FollowsRepository extends JpaRepository<Follows, Long> {
    Optional<Follows> findByFollowerAndFollowing(User follower, User following);
}
