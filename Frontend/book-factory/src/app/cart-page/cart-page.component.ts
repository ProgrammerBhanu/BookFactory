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
  

  constructor(private bookService: BooksServiceService) {}

  ngOnInit(): void {
    let data:any = localStorage.getItem("cart");
    this.cart = JSON.parse(data);
    
    this.findTotal();
    this.setCartDataFromLocalStorage();
  }

  setCartDataFromLocalStorage() {
    let data: any = localStorage.getItem('cart');
    data = JSON.parse(data);
    this.cart = data;
  }

  deleteItem(index: number) {
    this.cart.splice(index, 1);
    let data: any = localStorage.getItem('cart');
    data = JSON.parse(data);
    data.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(data));
    this.findTotal();
    if (this.discount == true) {
      this.total = (this.total * 0.7).toFixed(2);
    }
  }
  changeQuantity(value: any, index: number) {
    this.cart[index].quantity = value.target.value;
    this.findTotal();
    let data: any = localStorage.getItem('cart');
    data = JSON.parse(data);
    data[index].quantity = value.target.value;
    localStorage.setItem('cart', JSON.stringify(data));
  }

  findTotal() {
    let sum: number = 0;
    for (let i = 0; i < this.cart.length; i++) {
      console.log(this.cart[i].quantity);
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
    // this.bookService.setToPaymentPage(this.total);
    let data: any = localStorage.getItem('total');
    if (JSON.parse(data) == null) {
      localStorage.setItem('total', JSON.stringify(this.total));
    } else {
      localStorage.setItem('total', JSON.stringify(this.total));
    }
  }
}
