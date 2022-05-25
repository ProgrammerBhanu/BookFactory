import { Component, OnInit } from '@angular/core';
import { BooksServiceService } from '../services/books-service.service';
@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css'],
})
export class PaymentPageComponent implements OnInit {
  public selectedNumber: String = 'a';
  public finalPayment = false;
  finalTotal: number = 0;
  constructor(private bookService: BooksServiceService) {}

  ngOnInit(): void {
    this.finalTotal = this.bookService.getToPaymentPage();
  }

  showBlock(value: String) {
    console.log(value);
    console.log(typeof value);
    this.selectedNumber = value;
    console.log(this.selectedNumber);
  }

  toggle() {
    console.log(this.finalPayment);
    this.finalPayment = true;
  }

  
}
