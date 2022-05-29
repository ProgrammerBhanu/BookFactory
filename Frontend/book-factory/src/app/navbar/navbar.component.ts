import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksServiceService } from '../services/books-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  adminFlag: boolean = false;
  dropFlag: boolean = false;
  cartVal: number = 0;
  textVal: string = "";
  searchData: any;
  cardFlag: boolean = false;
  loginFlag: boolean = false;

  userDetails: any;

  toggleflag: boolean = false;
  constructor(private dataService: BooksServiceService, private router: Router) {
    // this.showLength();
  }

  ngOnInit(): void {
    let data: any = localStorage.getItem('cart');
    this.cartVal = JSON.parse(data).length;
    this.dataService.newLoginFlag.subscribe({
      next: (data) => {
        console.log("newLogin", data)
        this.loginFlag = data;
      }
    })

  }

  toggledrop(): void {
    this.dropFlag = !this.dropFlag;
  }
  handleClose(): void {
    this.dropFlag = false;
  }

  // SEARCHING AND DEBOUNCING START
  setData(data: any) {
    this.searchData = data;
  }
  search(evt: any) {
    const searchText = evt.target.value;
    console.log(searchText)
    this.dataService.getDataWithSearch(searchText).subscribe(
      (data) => {
        this.setData(data);
      }
    )
    this.cardFlag = true;

  }
  searchCard(): void {
    this.cardFlag = false;
    this.textVal = "";
  }
  // SEARCHING AND DEBOUNCING END


  // Admin part starts

  handleAdmin(): void {

    let token: any = localStorage.getItem('token');
    token = JSON.parse(token);
    if (token !== null) {
      this.dataService.getUserDetails().subscribe((res) => {
        this.userDataAssign(res)
      })

    } else {
      this.router.navigateByUrl("/login");
      this.handleClose();
    }

    console.log("User Details", this.userDetails)
    console.log(this.userDetails.role, "dd")

    if (this.userDetails.role !== 'admin') {

      console.log("User data", this.userDetails.role);
      alert("You are not Admin !! Plz login!!");
      this.router.navigateByUrl("/login");
      this.handleClose();
    } else {

      this.dataService.setAdminFlag(true);
      alert("You are in admin Panel!!");
      this.handleClose();

    }

    // console.log(token.response);
    // // alert("Welcome to Admin Panel");
    // // this.adminFlag = true
    // // this.dataService.setAdminFlag(true);

  }

  userDataAssign(input: any) {
    this.userDetails = input
  }


  handleLogout(): void {
    localStorage.setItem('token', JSON.stringify(null));
    this.dataService.setAdminFlag(false);
    this.dataService.changeInFlag(false);

  }

  toggleDrop(): void {
    this.toggleflag = !this.toggleflag;
  }
}