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
  cart: any = [
    {
      id: '628cc7b2bf824caa369eae60',
      isbn: '9780136127802',
      lang: 'english',
      year: '?2010',
      title: 'From reading to writing 2',
      price: 250.0,
      author: 'Blanchard, Karen',
      publisher: 'Pearson Education',
      publisherCity: 'New York',
      physicalDescription: '196 p.',
      images: [
        'https://images-na.ssl-images-amazon.com/images/I/516pmXNNmCL._SX324_BO1,204,203,200_.jpg',
        'https://www.clearias.com/up/ias-books-upsc-exam.png',
        'https://www.clearias.com/up/ias-books-upsc-exam.png',
      ],
      genre: ['horror', 'classical', 'biography', 'lifeslice'],
      category: 'NewRelease',
      quantity: 1,
    },
    {
      id: '628cc7b2bf824caa369eae60',
      isbn: '9780136127802',
      lang: 'english',
      year: '?2010',
      title: 'zingal bell',
      price: 1999.0,
      author: 'Blanchard, Karen',
      publisher: 'Pearson Education',
      publisherCity: 'New York',
      physicalDescription: '196 p.',
      images: [
        'https://images-na.ssl-images-amazon.com/images/I/516pmXNNmCL._SX324_BO1,204,203,200_.jpg',
        'https://www.clearias.com/up/ias-books-upsc-exam.png',
        'https://images-na.ssl-images-amazon.com/images/I/516pmXNNmCL._SX324_BO1,204,203,200_.jpg',
      ],
      genre: ['horror', 'classical', 'biography', 'lifeslice'],
      category: 'NewRelease',
      quantity: 1,
    },
  ];

  constructor(private bookService: BooksServiceService) {}

  ngOnInit(): void {
    // this.bookService
    //   .getAllBooksWithPaggination()
    //   .subscribe((data) => this.setCart(data));
    this.findTotal();
  }

  // setCart(data: any) {
  //   this.cart = data;
  // }
  deleteItem(index: number) {
    this.cart.splice(index, 1);
    this.findTotal();
    if ((this.discount == true)) {
      this.total = (this.total * 0.7).toFixed(2);
    }
  }
  changeQuantity(value: any, index: number) {
    this.cart[index].quantity = value.target.value;
    this.findTotal();
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
}
