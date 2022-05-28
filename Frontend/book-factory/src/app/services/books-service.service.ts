import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BooksServiceService {
  private cartValue: number = 0;
  someData:any;
  private adminFlag: boolean = false;
  constructor(private http: HttpClient) {}
  private loginFlag:boolean = true;




  getCartVal() {
    return this.cartValue;
  }

  
  setloginFlag(val:any): void {
    this.loginFlag = val;
  }

  getloginFlag() {
    return this.loginFlag;
  }
  setAdminFlag(val:any): void {
    this.adminFlag = val;
  }

  getAdminFlag() {
    return this.adminFlag;
  }

  setCardVal(val: number): void {
    this.cartValue = val;
  }
  public getAllBooks() {
    //get all books with out pagination
    return this.http.get('http://localhost:8080/book/');
  }
  // public getContactById(id: string) {

  //   return this.http.get("http://localhost:8080/getContact/" + id);
  // }
  public addBooks(data: any) {
    let token: any = localStorage.getItem('token');
    token = JSON.parse(token);

    console.log(token.response);

    let headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('Authorization',  `Bearer ${token.response}`)

    return this.http.post('http://localhost:8080/book/add', data,{headers});
  }
  public putBooks(data: any) {
    let token: any = localStorage.getItem('token');
    token = JSON.parse(token);

    console.log(token.response);

    let headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('Authorization',  `Bearer ${token.response}`)
    return this.http.put('http://localhost:8080/book/update', data);
  }
  public delete(id: string) {
    let token: any = localStorage.getItem('token');
    token = JSON.parse(token);

    console.log(token.response);

    let headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('Authorization',  `Bearer ${token.response}`)
    return this.http.delete('http://localhost:8080/book/delete/?id=' + id,{headers});
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
    return this.http.get('http://localhost:8080/book/sendEmail/?toemail=' + toEmail);
  }
  public sendEmailWithBody(body: string) {
    return this.http.get(
      'http://localhost:8080/book/suggestion/?body=' + body);
  }

  public registerUser(data: any) {
    return this.http.post('http://localhost:8080/register', data);
  }
  public loginUser(data: any) {
    return this.http.post('http://localhost:8080/login', data);
  }

  public sendDataToPost(data:any){
       this.someData = data 
  }
  public getDataToPost(){
    return this.someData 
}
}
