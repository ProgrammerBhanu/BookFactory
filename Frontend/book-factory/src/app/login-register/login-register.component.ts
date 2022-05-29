import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksServiceService } from '../services/books-service.service';
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
})
export class LoginRegisterComponent implements OnInit {
  flag: boolean = false;
  token: any;

  constructor(
    private router: Router,
    private bookService: BooksServiceService
  ) {}

  ngOnInit(): void {
    this.flag = history.state.flag;
  }

  setToken(data: any) {
    this.token = data;
  }
  handleLogin(data: any) {
    console.log(data);
    if (data.username === '') {
      alert('plz enter a valid username ');
      return;
    }
    if (data.password === '') {
      alert('plz enter a valid password ');
      return;
    }
    this.bookService.loginUser(data).subscribe((data) => {
      console.log('token', data), this.setToken(data);
    });
    console.log("setToken",this.token);
    localStorage.setItem('token', JSON.stringify(this.token));
    let cart: any = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    
    if(this.token != null){
      console.log("fjkdgjlkdfjg")
      this.bookService.changeInFlag(true);
      this.router.navigateByUrl("");
    }

  }
  handleRegister(data: any) {
   
    if (data.username === '') {
      alert('plz enter a valid username  ');
      return;
    }
    if (data.email === '') {
      alert('plz enter a valid email  ');
      return;
    }
    if (
      data.mobileno === '' ||
      data.mobileno <= 999999999 ||
      data.mobileno > 9999999999
    ) {
      alert('plz enter a valid mobile');
      return;
    }
    if (data.password === '' ) {
      alert('plz enter a valid password  ');
      return;
    }

    this.bookService.registerUser(data).subscribe((data) =>{
      console.log(data);
      alert("You have registered successfully!!");
    });
    this.router.navigateByUrl("/login");
    this.bookService.sendEmailWithUserEmail(data.email).subscribe(data=> console.log(data))
    
  }
  registerRoute() {

    
    this.flag = true;
    this.router.navigateByUrl('/register');
   
  }
  loginRoute() {
    this.router.navigateByUrl('/login');
    this.flag = false;
  }
}
