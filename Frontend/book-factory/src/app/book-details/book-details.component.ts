import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksServiceService } from '../services/books-service.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  bookDetail: any;
  imageSrc: any;
  adminFlag: boolean = false;
  userDetails: any;
  user: any;
  constructor(
    private dataService: BooksServiceService,
    private router: Router
  ) {
    this.bookDetail = history.state.data;
    this.imageSrc = history.state.data.images[0];
  }

  ngOnInit(): void {
    this.dataService.newAdminFlag.subscribe({
      next:(data)=>{
        this.adminFlag = data;
      }
    })

 
    let data: any = localStorage.getItem('cart');
    if (JSON.parse(data) == null) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }
  changeImg(idx: any): void {
    this.imageSrc = this.bookDetail.images[idx];
  }

  setUserBookInCart(data: any) {
    this.user = data;

    let cart: any = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    let name = this.user.username;
    console.log('name', name);

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(`${name}`) == true) {
        let x = cart[i];
        x[name].push(this.bookDetail);
        break;
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  addToCart(): void {
    let token: any = localStorage.getItem('token');
    token = JSON.parse(token);
//hgga
    if(token === null){
      this.router.navigateByUrl("/login")
      return;
    }

    this.dataService.getUserDetails().subscribe((data) => this.setUserBookInCart(data));


  }

  deleteBook(id: any): void {
    console.log(id);
    alert('You have deleted book successfully!!');
    this.dataService.delete(id).subscribe((res) => console.log(res));
    this.router.navigateByUrl('');
  }

  buyNow(): void {
    this.dataService.setState(this.bookDetail.price);

    this.router.navigateByUrl('/cart/payment');
  }
  updateBook(val: any): void {
    // this.dataService.sendDataToPost(data);
    this.router.navigate(['updatebook'], { state: { data: val, flag: false } });
  }
}
