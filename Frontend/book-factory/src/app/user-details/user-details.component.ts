import { Component, OnInit } from '@angular/core';
import { BooksServiceService } from '../services/books-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  public userData: any;

  constructor(private bookService: BooksServiceService) {}

  ngOnInit(): void {
    this.bookService.getUserDetails().subscribe((data) => {
      this.setuserData(data);
    });
  }

  setuserData(data: any) {
    this.userData = data;
  }
}
