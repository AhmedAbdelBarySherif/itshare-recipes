// Main ng modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Services and httpclient
import { HttpClientModule } from '@angular/common/http';
import { TryService } from './services/try.service';
import { AuthService } from './services/auth.service';
import { AuthGaurdService } from './services/auth-gaurd.service';

// Routing file
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HomeComponent } from './components/home/home.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { AdminManageUsersComponent } from './components/admin-manage-users/admin-manage-users.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Firebase modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from '@angular/fire/auth';

// Environment file contains firebase config
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    MyOrdersComponent,
    AdminOrdersComponent,
    ShoppingCartComponent,
    LoginComponent,
    HomeComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyordersComponent,
    AdminManageUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [
    TryService,
    AngularFireAuth,
    AuthService,
    AuthGaurdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
