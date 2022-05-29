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
  constructor(private bookService: BooksServiceService) {
    this.booksData = new Array<any>();
  }

  getAllBooks() {
    this.bookService
      .getBookWithGivenPage(this.CurrentPageNo)
      .subscribe((data) => this.setBookdata(data));
  }

  setAllBook(data: any) {
    this.AllBook = data.body;
    console.log(this.AllBook);
    // fdskhfewrhoirewo
  }

  setBookdata(data: any) {
    this.booksData = data.data;
    this.CurrentPageNo = data.CurrentPage;
    this.TotalRecords = data.TotalElement;
  }
  ngOnInit(): void {
    if (history.state.val == '' || history.state.val == undefined) {
      this.bookService
        .getAllBooksWithPaggination()
        .subscribe((data) => this.setBookdata(data));
      this.bookService.getAllBooks().subscribe((data) => this.setAllBook(data));
    } else if (typeof history.state.val == 'number') {
      console.log(history.state.val);
      this.setPriceLessThanWithPageNo(history.state.val, history.state.val2);
    } else if (
      typeof history.state.val == 'string' &&
      typeof history.state.val2 == 'number'
    ) {
      console.log(history.state.val);
      // this.bookService.getAllBooks().subscribe((data) => this.setAllBook(data));
      // this.filterByGenre(history.state.val);
    } else if (typeof history.state.val == 'string') {
      console.log(history.state.val);
      this.setLanguage(history.state.val, 0);
    }
  }
  handleFilters(val: any): void {
    this.filterFlag = val;
  }
  handlePageChange(data: any) {
    this.CurrentPageNo = data;
    this.getAllBooks();
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
    let myData = this.AllBook;
    console.log('myData', myData);
    let arr = myData.filter((el: any) => el.genre.includes(gen) === true);
    console.log('arr', arr);
    this.booksData = arr.slice(0, 10);
    this.CurrentPageNo = 0;
    this.TotalRecords = 1;
  }

  addNewBook():void{

  }
}
