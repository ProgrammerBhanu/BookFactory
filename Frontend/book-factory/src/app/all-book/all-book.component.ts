import { Component, OnInit } from '@angular/core';
import { BooksServiceService } from '../services/books-service.service';
@Component({
  selector: 'app-all-book',
  templateUrl: './all-book.component.html',
  styleUrls: ['./all-book.component.css'],
})
export class AllBookComponent implements OnInit {
  filterFlag: string = '';
  AllBook: any;
  booksData: any;
  TotalPage: any;
  CurrentPageNo: any;
  constructor(private bookService: BooksServiceService) {}

  ngOnInit(): void {
    this.bookService
      .getAllBooksWithPaggination()
      .subscribe((data) => this.setBookdata(data));
    this.bookService.getAllBooks().subscribe((data) => this.setAllBook(data));
  }
  setAllBook(data: any) {
    this.AllBook = data.body;
    console.log(this.AllBook);
  }

  setBookdata(data: any) {
    this.booksData = data.data;
    this.CurrentPageNo = data.CurrentPage;
    this.TotalPage = data.TotalPage;
  }

  handleFilters(val: any): void {
    this.filterFlag = val;
  }

  setPriceLessThanWithPageNo(price: number, pageno: number) {
    this.bookService
      .getBooksForLessThanPrice(price, pageno)
      .subscribe((data) => this.setBookdata(data));
  }

  setLanguage(lang: string, pageno: number) {
    this.bookService
      .getBooksForLanguage(lang, pageno)
      .subscribe((data) => this.setBookdata(data));
  }

  filterByGenre(gen: string) {
    let newObj = {};
    let myData = this.AllBook;

    let arr = myData.filter((el: any) => el.genre.includes(gen) === true);

    this.booksData = arr.slice(0, 10);
    this.CurrentPageNo = 0;
    this.TotalPage = 1;
  }
}
