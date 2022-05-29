package com.bookfactory.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.bookfactory.backend.helper.JwtUtils;
import com.bookfactory.backend.model.AuthenticationRequest;
import com.bookfactory.backend.model.AuthenticationResponse;
import com.bookfactory.backend.model.UserModel;
import com.bookfactory.backend.repository.UserRepository;
import com.bookfactory.backend.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class JwtController {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private UserService userService;

	@Autowired
	private JwtUtils jwtUtils;

	@GetMapping("/dashboard")
	private String testingToken() {
		return "Welcome to the Dashboard " + SecurityContextHolder.getContext().getAuthentication().getName();
	}

	@PostMapping("/register")
	private ResponseEntity<?> subscribeClient(@RequestBody UserModel authenticationRequest) {

		try {
			userService.findDuplicate(authenticationRequest);

		} catch (Exception e) {
			return ResponseEntity.ok(new AuthenticationResponse("Error during client Register "));
		}
		return ResponseEntity.ok(new AuthenticationResponse("Succesfull Registered client "));
	}

	@PostMapping("/login")
	private ResponseEntity<?> authenticateClient(@RequestBody AuthenticationRequest authenticationRequest) {
		String username = authenticationRequest.getUsername();
		String password = authenticationRequest.getPassword();
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
//			return ResponseEntity.ok(new AuthenticationResponse("Succesfull authentication of client "+username));
		} catch (Exception e) {
			return ResponseEntity.ok(new AuthenticationResponse("Error during client authentication"));
		}

		UserDetails loadedUser = userService.loadUserByUsername(username);
		String generatedToken = jwtUtils.generateToken(loadedUser);

		return ResponseEntity.ok(new AuthenticationResponse(generatedToken));

//		return ResponseEntity.ok(new AuthenticationResponse("Success"));
	}

	@GetMapping("/userdetails")
	public ResponseEntity<?> user(@RequestHeader(value = "Authorization") String token) {
		System.out.println(token);
		System.out.print("ksjhfskjfhdkfghjdfjghjkdfghjkdfghkjdfgh");

		try {

			return new ResponseEntity<>(jwtUtils.extractAllClaims(token), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>("Error during client Subscription ", HttpStatus.NOT_FOUND);
		}
	}
}
