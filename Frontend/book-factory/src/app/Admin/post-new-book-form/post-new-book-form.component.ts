import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BooksServiceService } from '../../services/books-service.service';
@Component({
  selector: 'app-post-new-book-form',
  templateUrl: './post-new-book-form.component.html',
  styleUrls: ['./post-new-book-form.component.css'],
})
export class PostNewBookFormComponent implements OnInit {
  public flag: Boolean = false;
  obj: any;

  // Update book - connect element's with two way binding
  id: any;
  isbn: any = '';
  lang: any = '';
  year: any = '';
  title: any = '';
  author: any = '';
  price: any = null;
  publisher: any = '';
  publisherCity: any = '';
  physicalDescription: any = '';
  images: any = '';
  genre: any = '';
  category: any = 'BestSeller';

  constructor(private bookService: BooksServiceService) {
    this.flag = history.state.flag;
    if (!this.flag) {
      let val = history.state.data;
      this.handleInit(val);
    }
  }
  

  handleInit(val: any): void {
    this.id = val.id;
    this.isbn = val.isbn;
    this.lang = val.lang;
    this.year = val.lang;
    this.title = val.title;
    this.author = val.author;
    this.price = val.price;
    this.publisher = val.publisher;
    this.publisherCity = val.publisherCity;
    this.physicalDescription = val.physicalDescription;
    this.images = val.images.join(',');
    this.genre = val.genre.join(',');
    this.category = val.category;
  }

  ngOnInit(): void {}
  handleChange(e: any) {
    if (e.target.name === 'isbn') {
      this.isbn = e.target.value;
    } else if (e.target.name === 'lang') {
      this.lang = e.target.value;
    } else if (e.target.name === 'year') {
      this.year = e.target.value;
    } else if (e.target.name === 'title') {
      this.title = e.target.value;
    } else if (e.target.name === 'author') {
      this.author = e.target.value;
    } else if (e.target.name === 'price') {
      this.price = e.target.value;
    } else if (e.target.name === 'publisher') {
      this.publisher = e.target.value;
    } else if (e.target.name === 'publisherCity') {
      this.publisherCity = e.target.value;
    } else if (e.target.name === 'physicalDescription') {
      this.physicalDescription = e.target.value;
    } else if (e.target.name === 'images') {
      this.images = e.target.value;
    } else if (e.target.name === 'genre') {
      this.genre = e.target.value;
    } else if (e.target.name === 'category') {
      this.category = e.target.value;
    }
  }

  updateBook(val: any) {

    this.images = this.images.trim().split(',');
    for (let i = 0; i < this.images.length; i++) {
      this.images[i] = this.images[i].trim();
    }

    this.genre = this.genre.trim().split(',');
    for (let i = 0; i < this.genre.length; i++) {
      this.genre[i] = this.genre[i].trim();
    }
    let newObj = {
      id: this.id,
      isbn: this.isbn,
      lang: this.lang,
      year: this.year,
      title: this.title,
      author: this.author,
      price: this.price,
      publisher: this.publisher,
      publisherCity: this.publisherCity,
      physicalDescription: this.physicalDescription,
      images: this.images,
      genre: this.genre,
      category: this.category,
    };

    this.bookService.putBooks(newObj).subscribe((res) => {
      
      alert(`${this.title} updated Successfully!!`);
    },
    (err)=>{
      console.log(newObj,"obj")
      console.log(err,"Errorrr")
    }
    
    );
  }
  addBook(val: any) {
    if (this.isbn === '') {
      alert('plz enter a valid isbn  ');
      return;
    }
    if (this.lang === '') {
      alert('plz enter a valid language  ');
      return;
    }
    if (this.year === '') {
      alert('plz enter a valid year  ');
      return;
    }
    if (this.title === '') {
      alert('plz enter a valid title  ');
      return;
    }
    if (this.price === '' || this.price < 0) {
      alert('plz enter a valid price  ');
      return;
    }
    if (this.author === '') {
      alert('plz enter a valid author  ');
      return;
    }
    if (this.publisher === '') {
      alert('plz enter a valid publisher  ');
      return;
    }
    if (this.publisherCity === '') {
      alert('plz enter a valid publisherCity  ');
      return;
    }
    if (this.physicalDescription === '') {
      alert('plz enter a valid physicalDescription  ');
      return;
    }
    if (this.images === '') {
      alert('plz enter a valid images  ');
      return;
    }
    if (this.genre === '') {
      alert('plz enter a valid genre  ');
      return;
    }
    if (this.category === '') {
      alert('plz enter a valid categoryame  ');
      return;
    }
    this.images = this.images.trim().split(',');
    for (let i = 0; i < this.images.length; i++) {
      this.images[i] = this.images[i].trim();
    }

    this.genre = this.genre.trim().split(',');
    for (let i = 0; i < this.genre.length; i++) {
      this.genre[i] = this.genre[i].trim();
    }

    let newObj = {
      isbn: this.isbn,
      lang: this.lang,
      year: this.year,
      title: this.title,
      author: this.author,
      price: this.price,
      publisher: this.publisher,
      publisherCity: this.publisherCity,
      physicalDescription: this.physicalDescription,
      images: this.images,
      genre: this.genre,
      category: this.category,
    };

    this.bookService.addBooks(newObj).subscribe((data) => {
      console.log('form post request', data);
      alert('You have successfully added new Book!!');
    });
  }
}
