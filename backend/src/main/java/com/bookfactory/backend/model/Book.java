package com.bookfactory.backend.model;

import java.util.ArrayList;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Book {

	@Id
	private String id;
	
	@NotNull(message = "isbn can not be null")
	private String isbn;
	
	@NotNull(message = "lang can not be null")
	private String lang;
	
	@NotNull(message = "year can not be null")
	private String year;
	
	@NotNull(message = "title can not be null")
	private String title;
	
	@NotNull(message = "price can not be null")
	private float price;
	
	@NotNull(message = "author can not be null")
	private String author;
	
	@NotNull(message = "publisher can not be null")
	private String publisher;
	
	@NotNull(message = "publisherCity can not be null")
	private String publisherCity;
	
	@NotNull(message = "physicalDescription can not be null")
	private String physicalDescription;

	private ArrayList images;
	
	@NotNull(message = "genre can not be null")
	private ArrayList genre;
	
	@NotNull(message = "category can not be null")
	private String category;

	private int quantity = 1;

	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Book(String id, String isbn, String lang, String year, String title, float price, String author,
			String publisher, String publisherCity, String physicalDescription, ArrayList images, ArrayList genre,
			String category, int quantity) {
		super();
		this.id = id;
		this.isbn = isbn;
		this.lang = lang;
		this.year = year;
		this.title = title;
		this.price = price;
		this.author = author;
		this.publisher = publisher;
		this.publisherCity = publisherCity;
		this.physicalDescription = physicalDescription;
		this.images = images;
		this.genre = genre;
		this.category = category;
		this.quantity = quantity;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public String getLang() {
		return lang;
	}

	public void setLang(String lang) {
		this.lang = lang;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getPublisher() {
		return publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	public String getPublisherCity() {
		return publisherCity;
	}

	public void setPublisherCity(String publisherCity) {
		this.publisherCity = publisherCity;
	}

	public String getPhysicalDescription() {
		return physicalDescription;
	}

	public void setPhysicalDescription(String physicalDescription) {
		this.physicalDescription = physicalDescription;
	}

	public ArrayList getImages() {
		return images;
	}

	public void setImages(ArrayList images) {
		this.images = images;
	}

	public ArrayList getGenre() {
		return genre;
	}

	public void setGenre(ArrayList genre) {
		this.genre = genre;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

}
