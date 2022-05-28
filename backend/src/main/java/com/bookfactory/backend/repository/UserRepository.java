package com.bookfactory.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.bookfactory.backend.model.UserModel;

@Repository
public interface UserRepository extends MongoRepository<UserModel, String> {

	UserModel findByUsername(String username);
	
}