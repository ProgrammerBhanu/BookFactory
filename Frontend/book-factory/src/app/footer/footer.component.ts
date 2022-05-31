import { Component, OnInit } from '@angular/core';
import { BooksServiceService } from '../services/books-service.service';
@Component({
  selector: 'app-footerCom',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private bookService: BooksServiceService) {}

  ngOnInit(): void {}

  // ------------------ Suggestion Box --------------------------------
  suggestionBoxContaint(data: any) {
    this.bookService
      .sendEmailWithBody(data.value)
      .subscribe((data) => console.log(data));
      alert("suggestion has been sent to admin ")
  }
}
