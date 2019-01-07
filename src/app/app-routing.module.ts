import { AuthGaurdService } from './services/auth-gaurd.service';
import { AdminManageUsersComponent } from './components/admin-manage-users/admin-manage-users.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGaurdService] },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGaurdService] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGaurdService] },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGaurdService] },
  { path: 'admin/products', component: ProductsComponent, canActivate: [AuthGaurdService] },
  { path: 'admin/users', component: AdminManageUsersComponent, canActivate: [AuthGaurdService] },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
