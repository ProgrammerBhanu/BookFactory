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
  user: any;
  checkValue :boolean= false;
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
    console.log('setToken', this.token);
    localStorage.setItem('token', JSON.stringify(this.token));
    
    if(this.token != null){
      this.bookService.changeInFlag(true);
      this.router.navigateByUrl("");
    }

    this.bookService.getUserDetails().subscribe((data) => this.setUser(data));
  }
  setUser(data: any) {
    this.user = data;

    
    let x: any = localStorage.getItem('cart');
    x = JSON.parse(x);
    if(x == null){
      localStorage.setItem('cart', JSON.stringify([]));
    }
    let cart: any = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    let name = this.user.username;
    console.log("name",name);
   

    for(let i =0 ;i< cart.length ;i++){
        if(cart[i].hasOwnProperty(`${name}`) == true ){
           this.checkValue = true ;
        }
    }
    if(this.checkValue !== true ){
      let newObj = { [name]: []}
      cart.push(newObj);
      
    }
    localStorage.setItem('cart', JSON.stringify(cart));

    let cart1: any = localStorage.getItem('cart');
    cart1 = JSON.parse(cart1);

    for (let i = 0; i < cart1.length; i++) {
      if (cart1[i].hasOwnProperty(`${name}`) == true) {
        let x = cart1[i];
          this.bookService.changeInCartVal(x[name].length);
        break;
      }
    }
    window.location.reload();

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
    if (data.password === '') {
      alert('plz enter a valid password  ');
      return;
    }

    this.bookService.registerUser(data).subscribe((data) => {
      console.log(data);
      alert('You have registered successfully!!');
    });
    this.router.navigateByUrl('/login');
    this.bookService
      .sendEmailWithUserEmail(data.email)
      .subscribe((data) => console.log(data));
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
function newObj(newObj: any) {
  throw new Error('Function not implemented.');
}

