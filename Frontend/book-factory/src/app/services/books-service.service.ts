import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksServiceService {
  private cartValue: number = 0;

  constructor() {}

  getCartVal() {
    return this.cartValue;
  }

  setCardVal(val: number): void {
    this.cartValue = val;
  }


  
}
