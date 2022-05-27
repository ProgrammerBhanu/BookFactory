package com.bookfactory.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.data.mongodb.repository.Query;

import com.bookfactory.backend.helper.JwtUtils;
import com.bookfactory.backend.model.JwtRequest;

public interface UserRepository  extends MongoRepository<JwtRequest,String> {


	JwtRequest findByUsername(String username);

}
