package com.bookfactory.backend.controller;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bookfactory.backend.model.Book;
import com.bookfactory.backend.service.BookService;

@RestController
@CrossOrigin(origins = "http://localhost:50110") 
@RequestMapping("/book")
public class BookController {
	@Autowired
	BookService bookService;

	// get
	@GetMapping("/")
	public ResponseEntity<?> getAll() {
		return ResponseEntity.ok(bookService.getAll());
	}

	// post
	@PostMapping("/")
	public ResponseEntity<?> addBook(@RequestBody Book book) {
		return bookService.addBook(book);
	}

	// update
	@PutMapping("/")
	public ResponseEntity<?> update(@RequestBody Book book,
			@RequestParam(name = "pageno", defaultValue = "0") int pageNo,
			@RequestParam(name = "pagesize", defaultValue = "10") int pageSize,
			@RequestParam(name = "sortby", defaultValue = "id") String sortBy) {
		return bookService.update(book, pageNo, pageSize, sortBy);
	}

	// delete
	@DeleteMapping("/")
	public ResponseEntity<?> delete(@PathParam("id") String id) {
		return bookService.delete(id);
	}

	// pagination
	@GetMapping("/page")
	public ResponseEntity<?> getAllBookInPage(@RequestParam(name = "pageno", defaultValue = "0") int pageNo,
			@RequestParam(name = "pagesize", defaultValue = "10") int pageSize,
			@RequestParam(name = "sortby", defaultValue = "id") String sortBy) {
		return bookService.getAllBookInPage(pageNo, pageSize, sortBy);
	}

	// sortBy
	@GetMapping("/sortby")
	public ResponseEntity<?> sortBy(@RequestParam(name = "pageno", defaultValue = "0") int pageNo,
			@RequestParam(name = "pagesize", defaultValue = "10") int pageSize,
			@RequestParam(name = "sortby", defaultValue = "id") String sortBy) {
		return bookService.sortBy(pageNo, pageSize, sortBy);
	}

	// search by title
	@GetMapping("/search")
	public ResponseEntity<?> searchName(@RequestParam(name = "title") String word) {
		return bookService.searchName(word);
	}

	// getById
	@GetMapping("/get/one/{id}")
	public ResponseEntity<?> getOne(@PathVariable String id) {
		return bookService.getOne(id);
	}

	// getByPrice greater than
	@GetMapping("/price")
	public ResponseEntity<?> getAllByPrice(@RequestParam(name = "price") float price) {
		return bookService.getAllBySalaryGreaterThan(price);
	}

}
