import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  flag:boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.flag = history.state.flag;
  }

  handleLogin(data:Object){
    
  }
  handleRegister(data:Object){

  }
  registerRoute(){
    this.router.navigateByUrl("register");
    this.flag = true;
  }
  loginRoute(){
    this.router.navigateByUrl("login");
    this.flag = false;
  }
}
