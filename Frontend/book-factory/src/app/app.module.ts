import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AllBookComponent } from './all-book/all-book.component';

import { PostNewBookFormComponent } from './Admin/post-new-book-form/post-new-book-form.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginRegisterComponent,
    FooterComponent,
    AllBookComponent,
    PostNewBookFormComponent,
    CartPageComponent,
    PaymentPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
