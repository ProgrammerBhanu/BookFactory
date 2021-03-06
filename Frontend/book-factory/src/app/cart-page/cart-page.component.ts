import { Component, OnInit } from '@angular/core';
import { BooksServiceService } from '../services/books-service.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  subTotal: any;
  total: any;
  discount: boolean = false;
  cart: any;
  emptyCart: Boolean = false;
  user: any;
  constructor(private bookService: BooksServiceService) {}

  ngOnInit(): void {
    this.bookService.getUserDetails().subscribe((data) => {
      this.setCartDataFromLocalStorage(data);
    });
  }

  // ---------------- Check Cart Details empty -----------------------
  checkCartIsEmpty() {
    let cart: any = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    let name = this.user.username;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(`${name}`) == true) {
        let x = cart[i];
        if (x[name].length == 0) {
          this.emptyCart = true;
        }
        break;
      }
    }
  }

  //  ------------------ set Cart Value -----------------------------------

  setCartDataFromLocalStorage(data: any) {
    this.user = data;

    let cart: any = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    let name = this.user.username;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(`${name}`) == true) {
        let x = cart[i];
        this.cart = x[name];
        break;
      }
    }

    this.checkCartIsEmpty();
    this.findTotal();
  }

  // -------------- detele Item -----------------------------

  deleteItem(index: number) {
    this.cart.splice(index, 1);
    let name = this.user.username;

    let cart: any = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(`${name}`) == true) {
        let x = cart[i];
        x[name].splice(index, 1);
        break;
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.findTotal();
    if (this.discount == true) {
      this.total = (this.total * 0.7).toFixed(2);
    }

    this.checkCartIsEmpty();
  }

  // --------------- Change Quantity -------------------------
  changeQuantity(value: any, index: number) {
    this.cart[index].quantity = value.target.value;
    this.findTotal();

    let cart: any = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    let name = this.user.username;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(`${name}`) == true) {
        let x = cart[i];
        x[name][index].quantity = value.target.value;
        break;
      }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }


  // ----------------- Find Total Value -------------------------

  findTotal() {
    let sum: number = 0;
    for (let i = 0; i < this.cart.length; i++) {
      sum += this.cart[i].price * this.cart[i].quantity;
    }
    this.subTotal = sum;
    this.total = sum;
  }

  applyDiscount() {
    if (this.discount == false) {
      this.discount = true;
    } else {
      this.discount = false;
    }

    if (this.discount == true) {
      this.total = (this.total * 0.7).toFixed(2);
    }
    if (this.discount == false) {
      this.total = (this.total / 0.7).toFixed(2);
    }
  }

  setToPaymentVariable() {
    let data: any = localStorage.getItem('total');
    if (JSON.parse(data) == null) {
      localStorage.setItem('total', JSON.stringify(this.total));
    } else {
      localStorage.setItem('total', JSON.stringify(this.total));
    }
  }
}
