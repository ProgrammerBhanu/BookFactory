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
  booksData: Array<any>;
  TotalRecords: any;
  CurrentPageNo: any = 1;
  adminFlag: boolean = false;
  constructor(private bookService: BooksServiceService) {
    this.booksData = new Array<any>();
  }
  // ------------get all book-----------------
  getAllBooks() {
    this.bookService
      .getBookWithGivenPage(this.CurrentPageNo)
      .subscribe((data) => this.setBookdata(data));
  }
  // ------------setBook to a variable -----------------
  setAllBook(data: any) {
    this.AllBook = data.body;
  }
  // ------------setdata to bookData variable----------------
  setBookdata(data: any) {
    this.booksData = data.data;
    this.CurrentPageNo = data.CurrentPage;
    this.TotalRecords = data.TotalElement;
  }
  ngOnInit(): void {
    this.bookService.newAdminFlag.subscribe({
      next: (data) => {
        this.adminFlag = data;
      },
    });

    if (history.state.val == '' || history.state.val == undefined) {
      this.bookService
        .getAllBooksWithPaggination()
        .subscribe((data) => this.setBookdata(data));
      this.bookService.getAllBooks().subscribe((data) => this.setAllBook(data));
    } else if (typeof history.state.val == 'number') {
      this.setPriceLessThanWithPageNo(history.state.val, history.state.val2);
    } else if (
      typeof history.state.val == 'string' &&
      typeof history.state.val2 == 'number'
    ) {
      // this.bookService.getAllBooks().subscribe((data) => this.setAllBook(data));
      // this.filterByGenre(history.state.val);
    } else if (typeof history.state.val == 'string') {
      this.setLanguage(history.state.val, 0);
    }
  }

   // ------------filter flag-----------------
  handleFilters(val: any): void {
    this.filterFlag = val;
  }

   // ------------method to change page no.-----------------
  handlePageChange(data: any) {
    this.CurrentPageNo = data;
    this.getAllBooks();
  }
 // ------------get value of price to variable-----------------
  setPriceLessThanWithPageNo(price: number, pageno: number) {
    this.bookService
      .getBooksForLessThanPrice(price, pageno)
      .subscribe((data) => this.setBookdata(data));
  }
 // ------------ set array of language Bookdata-----------------
  setLanguage(lang: string, pageno: number) {
    this.bookService
      .getBooksForLanguage(lang, pageno)
      .subscribe((data) => this.setBookdata(data));
  }
 // ------------set bookdata  with given filter value -----------------
  filterByGenre(gen: string) {
    let myData = this.AllBook;
    let arr = myData.filter((el: any) => el.genre.includes(gen) === true);
    this.booksData = arr.slice(0, 10);
    this.CurrentPageNo = 0;
    this.TotalRecords = 1;
  }

  addNewBook(): void {}
}
