import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookDetail:any;
  imageSrc:any;
  constructor() {
    this.bookDetail = history.state.data;
    this.imageSrc = history.state.data.images[0];
   }

  ngOnInit(): void {
    let data:any = localStorage.getItem("cart");
    if(JSON.parse(data) == null){
        localStorage.setItem("cart",JSON.stringify([]));
    }
  }
  changeImg(idx:any):void{
    this.imageSrc = this.bookDetail.images[idx];
  }

  addToCart():void{
    let data:any = localStorage.getItem("cart");
    data = JSON.parse(data);
    data.push(this.bookDetail)
    localStorage.setItem("cart",JSON.stringify(data));
  }
}
