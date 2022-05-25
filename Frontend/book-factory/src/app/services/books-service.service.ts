import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BooksServiceService {
  private cartValue: number = 0;
  toPaymentPage: number = 0;
  constructor(private http: HttpClient) {}

  getToPaymentPage() {
    return this.toPaymentPage;
  }

  setToPaymentPage(data: number) {
    this.toPaymentPage = data;
  }

  getCartVal() {
    return this.cartValue;
  }

  setCardVal(val: number): void {
    this.cartValue = val;
  }
  public getAllBooks() {
    //get all books with out pagination
    return this.http.get('http://localhost:8080/book/');
  }

  public addBooks(data: any) {
    return this.http.post('http://localhost:8080/book/', data);
  }
  public put(para: string, data: any) {
    return this.http.put('http://localhost:8080/book', data);
  }
  public delete(id: string) {
    return this.http.delete('http://localhost:8080/book/?id=' + id);
  }
  public getAllBooksWithPaggination() {
    //get all books with  pagination
    return this.http.get('http://localhost:8080/book/page');
  }

  public getBookWithGivenPage(pageno: number) {
    //get  books with  pagination
    return this.http.get('http://localhost:8080/book/page/?pageno=' + pageno);
  }

  public getBookWithGivenSortBy(sortby: string) {
    //get all books with  pagination
    return this.http.get('http://localhost:8080/book/sortby/?sortby=' + sortby);
  }

  public getAllBooksForGivenTitle(title: string) {
    return this.http.get('http://localhost:8080/book/search/?title=' + title);
  }

  public getOneBooks(id: string) {
    return this.http.get('http://localhost:8080/book/get/one/' + id);
  }

  public getBooksForLessThanPrice(price: number,pageno:number) {
    return this.http.get('http://localhost:8080/book/price/?price=' + price+"&pageno="+pageno);
  }

  public getBooksForLanguage(lang: string,pageno:number) {
    return this.http.get('http://localhost:8080/book/search/language/?lang=' + lang+"&pageno="+pageno);
  } 
}
