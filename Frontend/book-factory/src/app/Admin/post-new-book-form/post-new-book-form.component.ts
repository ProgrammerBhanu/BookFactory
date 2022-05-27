import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BooksServiceService } from '../../services/books-service.service';
@Component({
  selector: 'app-post-new-book-form',
  templateUrl: './post-new-book-form.component.html',
  styleUrls: ['./post-new-book-form.component.css'],
})
export class PostNewBookFormComponent implements OnInit {
  flag: Boolean = true;
  obj: any;


  @ViewChild('isbn', { static: true }) isbnElement: ElementRef;
  @ViewChild('lang', { static: true }) langElement: ElementRef;
  @ViewChild('year', { static: true }) yearElement: ElementRef;
  @ViewChild('title', { static: true }) titleElement: ElementRef;
  @ViewChild('price', { static: true }) priceElement: ElementRef;
  @ViewChild('author', { static: true }) authorElement: ElementRef;
  @ViewChild('publisher', { static: true }) publisherElement: ElementRef;
  @ViewChild('publisherCity', { static: true })
  publisherCityElement: ElementRef;
  @ViewChild('physicalDescription', { static: true })
  physicalDescriptionElement: ElementRef;
  @ViewChild('images', { static: true }) imagesElement: ElementRef;
  @ViewChild('genre', { static: true }) genreElement: ElementRef;
  @ViewChild('category', { static: true }) categoryElement: ElementRef;

  constructor(
    isbnElement: ElementRef,
    langElement: ElementRef,
    yearElement: ElementRef,
    titleElement: ElementRef,
    priceElement: ElementRef,
    authorElement: ElementRef,
    publisherElement: ElementRef,
    publisherCityElement: ElementRef,
    physicalDescriptionElement: ElementRef,
    imagesElement: ElementRef,
    genreElement: ElementRef,
    categoryElement: ElementRef,
    private bookService: BooksServiceService
  ) {
    this.isbnElement = isbnElement;
    this.langElement = langElement;
    this.yearElement = yearElement;
    this.titleElement = titleElement;
    this.priceElement = priceElement;
    this.authorElement = authorElement;
    this.publisherElement = publisherElement;
    this.publisherCityElement = publisherCityElement;
    this.physicalDescriptionElement = physicalDescriptionElement;
    this.imagesElement = imagesElement;
    this.genreElement = genreElement;
    this.categoryElement = categoryElement;
  }

  ngOnInit(): void {
    this.flag = history.state.flag;
  }


  getValue(val: any) {
    this.obj = {
      ...val,
    };

    if (this.obj.isbn === '') {
      alert('plz enter a valid isbn  ');
      return;
    }
    if (this.obj.lang === '') {
      alert('plz enter a valid language  ');
      return;
    }
    if (this.obj.year === '') {
      alert('plz enter a valid year  ');
      return;
    }
    if (this.obj.title === '') {
      alert('plz enter a valid title  ');
      return;
    }
    if (this.obj.price === '' || this.obj.price < 0) {
      alert('plz enter a valid price  ');
      return;
    }
    if (this.obj.author === '') {
      alert('plz enter a valid author  ');
      return;
    }
    if (this.obj.publisher === '') {
      alert('plz enter a valid publisher  ');
      return;
    }
    if (this.obj.publisherCity === '') {
      alert('plz enter a valid publisherCity  ');
      return;
    }
    if (this.obj.physicalDescription === '') {
      alert('plz enter a valid physicalDescription  ');
      return;
    }
    if (this.obj.images === '') {
      alert('plz enter a valid images  ');
      return;
    }
    if (this.obj.genre === '') {
      alert('plz enter a valid genre  ');
      return;
    }
    if (this.obj.category === '') {
      alert('plz enter a valid categoryame  ');
      return;
    }
    this.obj.images = this.obj.images.trim().split(',');
    for (let i = 0; i < this.obj.images.length; i++) {
      this.obj.images[i] = this.obj.images[i].trim();
    }

    this.obj.genre = this.obj.genre.trim().split(',');
    for (let i = 0; i < this.obj.genre.length; i++) {
      this.obj.genre[i] = this.obj.genre[i].trim();
    }

    console.log(this.obj);

    if (this.flag === true) {
      this.bookService
        .addBooks(this.obj)
        .subscribe((data) => console.log('form post request', data));
    } else {
      // this.bookService
      //   .putBooks(this.obj)
      //   .subscribe((data) => console.log('form update request', data));
    }

    // this.isbnElement.nativeElement.value = null;
    // this.langElement.nativeElement.value = null;
    // this.yearElement.nativeElement.value = null;
    // this.titleElement.nativeElement.value = null;
    // this.priceElement.nativeElement.value = null;
    // this.authorElement.nativeElement.value = null;
    // this.publisherElement.nativeElement.value = null;
    // this.publisherCityElement.nativeElement.value = null;
    // this.physicalDescriptionElement.nativeElement.value = null;
    // this.imagesElement.nativeElement.value = null;
    // this.genreElement.nativeElement.value = null;
    // this.categoryElement.nativeElement.value = null;

    //  alert('book '+ {{this.flag ? "posted" : "updated"}}+' successfully');
  }
}
