import { Component, OnInit } from '@angular/core';
import { BooksServiceService } from '../services/books-service.service';
@Component({
  selector: 'app-all-book',
  templateUrl: './all-book.component.html',
  styleUrls: ['./all-book.component.css'],
})
export class AllBookComponent implements OnInit {
  filterFlag: string = '';

  booksData: Array<any>;
  TotalRecords: any;
  CurrentPageNo: any = 1;
  constructor(private bookService: BooksServiceService) {
    this.booksData = new Array<any>();
  }

  
  getAllBooks(){
    this.bookService
      .getBookWithGivenPage(this.CurrentPageNo)
      .subscribe((data) => this.setBookdata(data));
  }
  setBookdata(data: any) {
    this.booksData = data.data;
    this.CurrentPageNo = data.CurrentPage;
    this.TotalRecords = data.TotalElement;
  }
  ngOnInit(): void {
    this.getAllBooks();
  }
  handleFilters(val: any): void {
    this.filterFlag = val;
  }
  handlePageChange(data:any){
    this.CurrentPageNo = data;
    this.getAllBooks();
  }
}
