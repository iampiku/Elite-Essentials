package com.elite.essentials.repository;

import com.elite.essentials.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
   boolean existsByEmail(String email);
}
