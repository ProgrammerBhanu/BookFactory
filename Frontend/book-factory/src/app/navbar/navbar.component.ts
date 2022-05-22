import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  dropFlag:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggledrop():void{
    this.dropFlag = !this.dropFlag;
  }
  handleClose():void{
    this.dropFlag = false;
  }

}
