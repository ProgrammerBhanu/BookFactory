import { Component, OnInit } from '@angular/core';
import { BooksServiceService } from '../services/books-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  adminFlag:boolean = false;
  dropFlag: boolean = false;
  cartVal: number = 0;
  textVal: string = "";
  searchData:any;
  cardFlag:boolean = false;
  loginFlag:boolean = false;

  toggleflag:boolean = false;
  constructor(private dataService: BooksServiceService) {
    this.showLength();
  }

  ngOnInit(): void {
    let data: any = localStorage.getItem('cart');
    this.cartVal = JSON.parse(data).length;
    this.adminFlag = this.dataService.getAdminFlag();
    this.loginFlag = this.dataService.getloginFlag();
    
  }

  toggledrop(): void {
    this.dropFlag = !this.dropFlag;
  }
  handleClose(): void {
    this.dropFlag = false;
  }
  showLength() {
    setInterval(() => {
      this.ngOnInit();
    }, 1000);
  }
  // SEARCHING AND DEBOUNCING START
  setData(data:any){
    this.searchData = data;
  }
  search(evt:any) {
    const searchText = evt.target.value;
    console.log(searchText)
    this.dataService.getDataWithSearch(searchText).subscribe(
      (data)=>{
        this.setData(data);
      }
    )
    this.cardFlag = true;

}
searchCard():void{
  this.cardFlag = false;
  this.textVal = "";
}
  // SEARCHING AND DEBOUNCING END


// Admin part starts

handleAdmin():void{
  alert("Welcome to Admin Panel");
  this.adminFlag = true
  this.dataService.setAdminFlag(true);
  this.handleClose();
}

handleUser():void{
  alert("Welcome to User Panel");
  this.adminFlag = false;
  this.dataService.setAdminFlag(false);
  this.handleClose();
}


handleLogout():void{
  
}

toggleDrop():void{
  this.toggleflag = !this.toggleflag;
}
}