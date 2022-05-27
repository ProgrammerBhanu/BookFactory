package com.bookfactory.backend.controller;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bookfactory.backend.helper.JwtUtils;

import com.bookfactory.backend.model.JwtRequest;
import com.bookfactory.backend.model.JwtResponse;
import com.bookfactory.backend.service.UserService;

@RestController
@CrossOrigin(origins= "http://localhost:4200")
public class JwtController {
	@Autowired
	private UserService userService;
	
	@Autowired
	private AuthenticationManager authenticationManager; 
	
	@Autowired
	private JwtUtils jwtUtils;
	
	
	@RequestMapping(value = "login", method = RequestMethod.POST)
	public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception{
		try {
			
			this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(jwtRequest.getUsername(), jwtRequest.getPassword()));
		} catch (UsernameNotFoundException e) {
			e.printStackTrace();
			throw new Exception("Bad Credentials!!");
		} catch (BadCredentialsException e) {
			e.printStackTrace();
			throw new Exception("Bad Credentials!!");
		}
		
		UserDetails userDetails = this.userService.loadUserByUsername(jwtRequest.getUsername());
		String token = this.jwtUtils.generateToken(userDetails);
		System.out.print("JWT" + token);
		
		return ResponseEntity.ok(new JwtResponse(token));
	}
	
	//getUser
	@GetMapping("/alluser")
	public ResponseEntity<?> getAllUser(){
		return ResponseEntity.ok(userService.getAll());
	}
	
	   // post
		@PostMapping("/register")
		public ResponseEntity<?> addUser(@RequestBody JwtRequest user ) {
			return userService.addUser(user);
		}

		// update
		@PutMapping("/updateuser")
		public ResponseEntity<?> update(@RequestBody JwtRequest user,
				@RequestParam(name = "pageno", defaultValue = "0") int pageNo,
				@RequestParam(name = "pagesize", defaultValue = "10") int pageSize,
				@RequestParam(name = "sortby", defaultValue = "id") String sortBy) {
			return userService.update(user, pageNo, pageSize, sortBy);
		}

		// delete
		@DeleteMapping("/deleteuser")
		public ResponseEntity<?> delete(@PathParam("id") String id) {
			return userService.delete(id);
		}
	
	
}
