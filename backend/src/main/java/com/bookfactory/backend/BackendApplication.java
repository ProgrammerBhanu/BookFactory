package com.bookfactory.backend;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.bookfactory.backend.model.Book;
import com.bookfactory.backend.repository.BookRepository;
import com.bookfactory.backend.repository.UserRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;


@CrossOrigin(origins = "http://localhost:4200")
@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

	@Autowired
	BookRepository bookRepository;
	
	@Autowired
	private static UserRepository userRepo;

	
	
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/*").allowedHeaders("*").allowedOrigins("http://localhost:8080")
						.allowedMethods("*").allowCredentials(true);
			}
		};
	}
		
	@Override
	public void run(String... args) throws Exception {
		List<Book> listOfBooks = new ArrayList<Book>();

		bookRepository.insert(listOfBooks);
	}

}
