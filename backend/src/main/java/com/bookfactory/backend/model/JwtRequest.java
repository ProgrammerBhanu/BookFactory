package com.bookfactory.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("users")
public class JwtRequest {
	
	@Id
	String id;
	String email;
	long mobileno;
	String username;
	String password;
	
	
	public JwtRequest() {
		//super();
		// TODO Auto-generated constructor stub
	}
	public JwtRequest(String id, String email, long mobileno, String username, String password) {
		//super();
		this.id = id;
		this.email = email;
		this.mobileno = mobileno;
		this.username = username;
		this.password = password;
	}
	
	public JwtRequest(String username, String password) {
		
		
		this.username = username;
		this.password = password;
	}
	
	
//	public JwtRequest(String username, String password) {
//		super();
//		this.username = username;
//		this.password = password;
//	}
	
	
	public long getMobileno() {
		return mobileno;
	}
	public void setMobileno(long mobileno) {
		this.mobileno = mobileno;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	

	
}
