import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BooksServiceService } from './services/books-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-factory';

  constructor(private dataService:BooksServiceService){
    let token = localStorage.getItem('token');
    if(token != null){
      // token = JSON.parse(token);
      this.dataService.changeInFlag(true);
    }
  }
}
