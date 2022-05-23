import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css'],
})
export class PaymentPageComponent implements OnInit {
  public selectedNumber: String = 'a';
  public finalPayment = false;
  constructor() {}

  ngOnInit(): void {}

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
