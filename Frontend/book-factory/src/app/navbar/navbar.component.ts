import { Component, OnInit } from '@angular/core';
import { BooksServiceService } from '../services/books-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  dropFlag:boolean = false;
  cartVal:number = 0;
  constructor(private cartData:BooksServiceService) { }

  ngOnInit(): void {
    this.cartVal = this.cartData.getCartVal();
  }

  toggledrop():void{
    this.dropFlag = !this.dropFlag;
  }
  handleClose():void{
    this.dropFlag = false;
  }

}
