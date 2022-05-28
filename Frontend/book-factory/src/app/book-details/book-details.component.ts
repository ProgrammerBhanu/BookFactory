import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksServiceService } from '../services/books-service.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookDetail:any;
  imageSrc:any;
  adminFlag:boolean = false;
  constructor(private dataService: BooksServiceService, private router:Router) {
    this.bookDetail = history.state.data;
    this.imageSrc = history.state.data.images[0];
   }

  ngOnInit(): void {
    this.adminFlag = this.dataService.getAdminFlag();
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

  deleteBook(id:any):void{
    console.log(id);
    alert("You have deleted bookv successfully!!");
    this.dataService.delete(id).subscribe(res=>console.log(res));
    this.router.navigateByUrl("");
  }

  buyNow():void{

  }
  updateBook(data:any):void{
      this.dataService.sendDataToPost(data);

      this.router.navigateByUrl("/updatebook");
  }
}
