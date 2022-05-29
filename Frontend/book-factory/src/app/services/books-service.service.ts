import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BooksServiceService {
  private cartValue: number = 0;
  userRole: any;
  someData: any;
  // private adminFlag: boolean = false;

  someState: any;
  constructor(private http: HttpClient) {}

  setState(data: any) {
    this.someState = data;
  }
  getState() {
    return this.someState;
  }

  // Login
  private loginFlag = new BehaviorSubject<boolean>(false);
  newLoginFlag = this.loginFlag.asObservable();

  changeInFlag(val: boolean) {
    this.loginFlag.next(val);
  }

  private adminFlag = new BehaviorSubject<boolean>(false);
  newAdminFlag = this.adminFlag.asObservable();

  changeInAdminFlag(val: boolean) {
    this.adminFlag.next(val);
  }

  getCartVal() {
    return this.cartValue;
  }

  setloginFlag(val: any): void {
    this.loginFlag = val;
  }

  getloginFlag() {
    return this.loginFlag;
  }

  setCardVal(val: number): void {
    this.cartValue = val;
  }
  public getAllBooks() {
    //get all books with out pagination
    return this.http.get('http://localhost:8080/book/');
  }

  public addBooks(data: any) {
    let token: any = localStorage.getItem('token');
    token = JSON.parse(token);
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${token.response}`);

    return this.http.post('http://localhost:8080/book/add', data, { headers });
  }
  public putBooks(data: any) {
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    // .set('Authorization',  `Bearer ${token.response}`)
    return this.http.put('http://localhost:8080/book/update', data, {
      headers,
    });
  }
  public delete(id: string) {
    let token: any = localStorage.getItem('token');
    token = JSON.parse(token);

    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${token.response}`);
    return this.http.delete('http://localhost:8080/book/delete?id=' + id, {
      headers,
    });
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

  public getBooksForLessThanPrice(price: number, pageno: number) {
    return this.http.get(
      'http://localhost:8080/book/price/?price=' + price + '&pageno=' + pageno
    );
  }

  public getBooksForLanguage(lang: string, pageno: number) {
    return this.http.get(
      'http://localhost:8080/book/search/language/?lang=' +
        lang +
        '&pageno=' +
        pageno
    );
  }
  public getDataWithSearch(lang: string) {
    return this.http.get('http://localhost:8080/book/search/?title=' + lang);
  }

  public sendEmailWithUserEmail(toEmail: string) {
    return this.http.get(
      'http://localhost:8080/book/sendEmail/?toemail=' + toEmail
    );
  }
  public sendEmailWithThankyou(toEmail: string) {
    return this.http.get(
      'http://localhost:8080/book/sendEmailThankyou/?toemail=' + toEmail
    );
  }
  public sendEmailWithBody(body: string) {
    return this.http.get('http://localhost:8080/book/suggestion/?body=' + body);
  }

  public registerUser(data: any) {
    return this.http.post('http://localhost:8080/register', data);
  }
  public loginUser(data: any) {
    return this.http.post('http://localhost:8080/login', data);
  }

  public sendDataToPost(data: any) {
    this.someData = data;
  }
  public getDataToPost() {
    return this.someData;
  }

  public getUserDetails() {
    let token: any = localStorage.getItem('token');
    token = JSON.parse(token);
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${token.response}`);
    return this.http.get('http://localhost:8080/userdetails', { headers });
  }
}
