package com.bookfactory.backend.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.bookfactory.backend.model.UserModel;
import com.bookfactory.backend.repository.UserRepository;



@Service
public class UserService implements UserDetailsService {
	
	@Autowired
	private UserRepository userRepo;;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserModel foundedUser = userRepo.findByUsername(username);
		if(foundedUser == null) return null;
		
		String name = foundedUser.getUsername();
		String pwd = foundedUser.getPassword();
		
		return new User(name, pwd, new ArrayList<>());
	}
	
	
	public void findDuplicate(UserModel username) throws UsernameNotFoundException{
		UserModel foundedUser = userRepo.findByUsername(username.getUsername());
		if(foundedUser != null) {
			throw new UsernameNotFoundException("Duplicate user found");
		}else {
			userRepo.save(username);
		}
		
	}

}
