import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksServiceService } from '../services/books-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  adminFlag: boolean = false;
  dropFlag: boolean = false;
  cartVal: number = 0;
  textVal: string = '';
  searchData: any;
  cardFlag: boolean = false;
  loginFlag: boolean = false;
  user: any;
  userDetails: any;

  toggleflag: boolean = false;
  constructor(private dataService: BooksServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.dataService
      .getUserDetails()
      .subscribe((data) => this.setCartValFromLocalStorage(data));
    this.dataService.newLoginFlag.subscribe({
      next: (data) => {
        this.loginFlag = data;
      },
    });

    //---------------- admin login flag -----------------------
    this.dataService.newAdminFlag.subscribe({
      next: (data) => {
        this.adminFlag = data;
      }
    });

    // -------- cart Value -------------------
    this.dataService.newCartValue.subscribe({
      next:(data)=>{
        this.cartVal = data;
      }
    })

  }
  
  setCartValFromLocalStorage(data:any){
    this.user = data;
    let cart: any = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    let name = this.user.username;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(`${name}`) == true) {
        let x = cart[i];
        this.cartVal = x[name].length;
        break;
      }
    }
  }

  toggledrop(): void {
    this.dropFlag = !this.dropFlag;
  }
  handleClose(): void {
    this.dropFlag = false;
  }

  // -----------------SEARCHING AND DEBOUNCING START-------------------
  setData(data: any) {
    this.searchData = data;
  }
  search(evt: any) {
    const searchText = evt.target.value;
    console.log(searchText)
    if(searchText.length > 1){
      this.dataService.getDataWithSearch(searchText).subscribe(
        (data) => {
          this.setData(data);
        }
      )
      this.cardFlag = true;
    }
    

  }
  searchCard(): void {
    this.cardFlag = false;
    this.textVal = '';
  }
  //------------------ SEARCHING AND DEBOUNCING END-------------------------


  //------------------ Admin part starts ------------------------------------

  handleAdmin(): void {
    let token: any = localStorage.getItem('token');
    token = JSON.parse(token);
    if (token !== null) {
      this.dataService.getUserDetails().subscribe((res) => {
        this.userDataAssign(res);
      });
    } else {
      this.router.navigateByUrl('/login');
      this.handleClose();
    }
    setTimeout(() => {
      if (this.userDetails.role !== 'admin') {

        console.log("User data", this.userDetails.role);
        alert("You are not Admin !! Plz login!!");
        this.handleClose();
      } else {
        this.dataService.changeInAdminFlag(true);
        alert('You are in admin Panel!!');
        this.handleClose();
      }
    }, 1000);
  }

  userDataAssign(input: any) {
    this.userDetails = input;
  }


// -------------- logout ------------------------------------
  handleLogout(): void {
    localStorage.setItem('token', JSON.stringify(null));
    this.dataService.changeInAdminFlag(false);
    this.dataService.changeInFlag(false);
    window.location.reload();

  }

  toggleDrop(): void {
    this.toggleflag = !this.toggleflag;
  }
}
