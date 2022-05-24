import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBookComponent } from './all-book/all-book.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomeComponent } from './home/home.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginRegisterComponent,
  },
  {
    path: 'register',
    component: LoginRegisterComponent,
  },
  {
    path: 'allbooks',
    component: AllBookComponent,
  },
  {
    path: 'cart',
    component: CartPageComponent,
  },
  {
    path: 'cart/payment',
    component: PaymentPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
