import { Component, OnInit } from '@angular/core';
import { BooksServiceService } from '../services/books-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // serarchVal:string = "";
  dropFlag: boolean = false;
  cartVal: number = 0;
  textVal: string = "";
  searchData:any;
  cardFlag:boolean = false;
  constructor(private dataService: BooksServiceService) {
    this.showLength();
  }

  ngOnInit(): void {
    let data: any = localStorage.getItem('cart');
    this.cartVal = JSON.parse(data).length;
    
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
    console.log("Aa gya data",this.searchData)
}
searchCard():void{
  this.cardFlag = false;
  this.textVal = "";
}
  // SEARCHING AND DEBOUNCING END
}
