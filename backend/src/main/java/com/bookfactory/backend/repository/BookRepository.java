package com.bookfactory.backend.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.bookfactory.backend.model.Book;

@Repository
public interface BookRepository extends MongoRepository<Book, String> {

	List<Book> findByTitleStartingWith(String word);

	@Query(value = "{'price':{$lt:?0}}")
	Page<Book> getAllBySalaryGreaterThan(float price, Pageable pageable);

	Page<Book> findByLangStartingWith(String word, Pageable page);
}
