import { Component, OnInit } from '@angular/core';
import { BooksServiceService } from '../services/books-service.service';
@Component({
  selector: 'app-all-book',
  templateUrl: './all-book.component.html',
  styleUrls: ['./all-book.component.css'],
})
export class AllBookComponent implements OnInit {
  filterFlag: string = '';

  booksData: any;
  constructor(private bookService: BooksServiceService) {}

  ngOnInit(): void {
    this.bookService
      .getAllBooksWithPaggination()
      .subscribe((data) => this.setBookdata(data));
  }

  setBookdata(data: any) {
    this.booksData = data.data;
  }

  handleFilters(val: any): void {
    this.filterFlag = val;
  }
}
