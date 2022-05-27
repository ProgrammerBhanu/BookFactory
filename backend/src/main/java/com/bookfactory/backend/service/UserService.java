package com.bookfactory.backend.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.bookfactory.backend.model.JwtRequest;
import com.bookfactory.backend.repository.UserRepository;

@Service
public class UserService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		JwtRequest jwtUser = userRepository.findByUsername(username);
		if (username.equals("Bhanu")) {
			return new User("Bhanu","Bhanu123", new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("User not found !!");
		}
	}

	public ResponseEntity<?> getAll() {

		try {
			List<JwtRequest> c1 = userRepository.findAll();
			return new ResponseEntity<List<JwtRequest>>(c1, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}

	}

	public ResponseEntity<?> addUser(JwtRequest user) {

		try {
			JwtRequest c1 = userRepository.insert(user);
			return new ResponseEntity<JwtRequest>(c1, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	public ResponseEntity<?> update(JwtRequest user, int pageNo, int pageSize, String sortBy) {
		try {
			userRepository.save(user);

			Map<String, Object> response = new HashMap<String, Object>();

			Sort sort = Sort.by(sortBy);
			Pageable page = PageRequest.of(pageNo, pageSize, sort);

			Page<JwtRequest> employePage = userRepository.findAll(page);

			response.put("data", employePage.getContent());
			response.put("TotalPage", employePage.getTotalPages());
			response.put("TotalElement", employePage.getTotalElements());
			response.put("CurrentPage", employePage.getNumber());

			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	public ResponseEntity<?> delete(String id) {
		try {
			userRepository.deleteById(id);

			List<JwtRequest> c1 = userRepository.findAll();

			return new ResponseEntity<List<JwtRequest>>(c1, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}

	}

}