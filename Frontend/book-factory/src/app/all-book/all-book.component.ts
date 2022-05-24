import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-book',
  templateUrl: './all-book.component.html',
  styleUrls: ['./all-book.component.css']
})
export class AllBookComponent implements OnInit {
  filterFlag:string = "";
  booksData:any = [
    {
      "isbn": "9780471976707 ",
      "lang": "english",
      "year": "2000",
      "title": "Encyclopedia of analytical chemistry",
      "author": "Lean Chaung",
      "publisher": "John Wiley & Sons",
      "publisherCity": "Chichester",
      "physicalDescription": "XXI, 940 p.",
      "price": 99,
      "images": [
        "https://images-na.ssl-images-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",
        "https://www.clearias.com/up/ias-books-upsc-exam.png",
        "https://www.clearias.com/up/ias-books-upsc-exam.png"
      ],
      "genre": ["horror", "classical", "biography", "lifeslice"],
      "category": "NewRealase",
      "quantity": 1
    },
    {
      "isbn": "978041599948",
      "lang": "english",
      "year": "2004",
      "title": "Game theory",
      "author": "Heap, Shaun Hargreaves",
      "publisher": "Routledge",
      "publisherCity": "New York",
      "physicalDescription": "XIV, 369 p.",
      "price": 250,
      "images": [
        "https://images-na.ssl-images-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",
        "https://www.clearias.com/up/ias-books-upsc-exam.png",
        "https://www.clearias.com/up/ias-books-upsc-exam.png"
      ],
      "genre": ["horror", "classical", "biography", "lifeslice"],
      "category": "NewRealase",
      "quantity": 1
    },
    {
      "isbn": "9781856047715 ",
      "lang": "english",
      "year": "2011",
      "title": "Metadata for digital collections",
      "author": "Miller, Stephen J.",
      "publisher": "Facet Publishing",
      "publisherCity": "London",
      "physicalDescription": "XXIII, 343 p.",
      "price": 250,
      "images": [
        "https://images-na.ssl-images-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",
        "https://www.clearias.com/up/ias-books-upsc-exam.png",
        "https://www.clearias.com/up/ias-books-upsc-exam.png"
      ],
      "genre": ["horror", "classical", "biography", "lifeslice"],
      "category": "BestSeller",
      "quantity": 1
    },
    {
      "isbn": "9781405136662 ",
      "lang": "english",
      "year": "2007",
      "title": "Games and information",
      "author": "Rasmusen, Eric",
      "publisher": "Blackwell Publishing",
      "publisherCity": "Malden, MA",
      "physicalDescription": "XXIX, 528 p.",
      "price": 250,
      "images": [
        "https://images-na.ssl-images-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",
        "https://www.clearias.com/up/ias-books-upsc-exam.png",
        "https://www.clearias.com/up/ias-books-upsc-exam.png"
      ],
      "genre": ["horror", "classical", "biography", "lifeslice"],
      "category": "BestSeller",
      "quantity": 1
    },
    {
      "isbn": "9780471976707 ",
      "lang": "english",
      "year": "2000",
      "title": "Encyclopedia of analytical chemistry",
      "author": "",
      "publisher": "John Wiley & Sons",
      "publisherCity": "Chichester",
      "physicalDescription": "XXI, 939 p.",
      "price": 250,
      "images": [
        "https://images-na.ssl-images-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",
        "https://www.clearias.com/up/ias-books-upsc-exam.png",
        "https://www.clearias.com/up/ias-books-upsc-exam.png"
      ],
      "genre": ["horror", "classical", "biography", "lifeslice"],
      "category": "BestSeller",
      "quantity": 1
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  handleFilters(val:any):void{
    this.filterFlag = val;
  }
}
