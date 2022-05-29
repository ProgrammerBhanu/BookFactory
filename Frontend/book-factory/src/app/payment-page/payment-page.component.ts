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
  user:any;
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
      console.log('val', history.state.val);
    }
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

    this.bookService
    .getUserDetails()
    .subscribe((data) => this.setCartValuetoZeroFromLocalStorage(data));
  }

  handleThanku(): void {
    // localStorage.setItem('cart', JSON.stringify([]));
    this.bookService
    .getUserDetails()
    .subscribe((data) => this.setCartValuetoZeroFromLocalStorage(data));


    setTimeout(() => {
      this.router.navigateByUrl('');
    }, 2000);
  }


  setCartValuetoZeroFromLocalStorage(data:any){
    this.user = data;

    let cart: any = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    let name = this.user.username;
    console.log('name', name);

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(`${name}`) == true) {
        let x = cart[i];
          x[name] = [];
        break;
      }
    }
  }
  
}
