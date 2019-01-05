import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HttpClientModule } from '@angular/common/http';
import { TryService } from './services/try.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    MyOrdersComponent,
    AdminOrdersComponent,
    ShoppingCartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    NgbModule
  ],
  providers: [
    TryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
