package com.bookfactory.backend;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.bookfactory.backend.model.Book;
import com.bookfactory.backend.model.JwtRequest;
import com.bookfactory.backend.repository.BookRepository;
import com.bookfactory.backend.repository.UserRepository;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

	@Autowired
	BookRepository bookRepository;
	
	@Autowired
	private static UserRepository userRepo;

	@PostConstruct
	public static void saveUser() {
		JwtRequest user = new JwtRequest("Bhanu","Bhanu123");
		try {
			userRepo.save(user);
		} catch (Exception e) {
			System.out.println(e);
		}
	}
	
	
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		List<Book> listOfBooks = new ArrayList<Book>();

		bookRepository.insert(listOfBooks);
	}

}
