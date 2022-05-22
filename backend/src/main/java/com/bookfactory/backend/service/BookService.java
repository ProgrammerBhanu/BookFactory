package com.bookfactory.backend.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.bookfactory.backend.model.Book;
import com.bookfactory.backend.repository.BookRepository;

@Service
public class BookService {

	@Autowired
	BookRepository bookRepository;

	public ResponseEntity<?> getAll() {
		try {
			List<Book> c1 = bookRepository.findAll();

			return new ResponseEntity<List<Book>>(c1, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	public ResponseEntity<?> addBook(Book cont) {
		try {
			Book c1 = bookRepository.insert(cont);
			return new ResponseEntity<Book>(c1, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	public ResponseEntity<?> update(Book cont) {
		try {
			bookRepository.save(cont);

			List<Book> c1 = bookRepository.findAll();
			return new ResponseEntity<List<Book>>(c1, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	public ResponseEntity<?> delete(String id) {
		try {
			bookRepository.deleteById(id);

			List<Book> c1 = bookRepository.findAll();

			return new ResponseEntity<List<Book>>(c1, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}

	}

	public ResponseEntity<?> getAllBookInPage(int pageNo, int pageSize, String sortBy) {
		try {
			Map<String, Object> response = new HashMap<String, Object>();

			Sort sort = Sort.by(sortBy);
			Pageable page = PageRequest.of(pageNo, pageSize, sort);

			Page<Book> employePage = bookRepository.findAll(page);

			response.put("data", employePage.getContent());
			response.put("TotalPage", employePage.getTotalPages());
			response.put("TotalElement", employePage.getTotalElements());
			response.put("CurrentPage", employePage.getNumber());

			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	public ResponseEntity<?> searchName(String word) {
		try {
			List<Book> c1 = bookRepository.findByTitleStartingWith(word);
			return new ResponseEntity<List<Book>>(c1, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	public ResponseEntity<?> getOne(String id) {
		try {
			Optional<Book> c1 = bookRepository.findById(id);
			return new ResponseEntity<Optional<Book>>(c1, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	public ResponseEntity<?> sortBy(String sortBy) {

		try {
			Map<String, Object> response = new HashMap<String, Object>();

			Sort sort = Sort.by(sortBy);
			Pageable page = PageRequest.of(0, 30, sort);

			Page<Book> employePage = bookRepository.findAll(page);

			response.put("data", employePage.getContent());

			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

	public ResponseEntity<?> getAllBySalaryGreaterThan(float price) {
		
		try { 
		 List<Book> c1 = bookRepository.getAllBySalaryGreaterThan(price);
			return new ResponseEntity<List<Book>>(c1, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}

}