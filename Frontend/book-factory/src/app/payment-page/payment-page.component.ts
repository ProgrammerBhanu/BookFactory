import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksServiceService } from '../services/books-service.service';
@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css'],
})
export class PaymentPageComponent implements OnInit {
  public selectedNumber: String = 'a';
  public finalPayment = false;
  user: any;
  finalTotal: number = 0;
  constructor(
    private bookService: BooksServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (history.state.val == undefined) {
      this.finalTotal = this.bookService.getState();
    } else {
      this.finalTotal = history.state.val;
    }
  }

  showBlock(value: String) {
    this.selectedNumber = value;
  }

  toggle() {
    this.finalPayment = true;
    this.bookService
      .getUserDetails()
      .subscribe((data) => this.setCartValuetoZeroFromLocalStorage(data));

    this.bookService.sendEmailWithThankyou(this.user.email);
  }

  // ----------- Thank you Button ----------------

  handleThanku(): void {
    this.bookService
      .getUserDetails()
      .subscribe((data) => this.setCartValuetoZeroFromLocalStorage(data));

    setTimeout(() => {
      this.router.navigateByUrl('');
    }, 1000);
  }

  setCartValuetoZeroFromLocalStorage(data: any) {
    this.user = data;
    let cart: any = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    let name = this.user.username;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(`${name}`) == true) {
        let x = cart[i];
        x[name] = [];
        break;
      }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
