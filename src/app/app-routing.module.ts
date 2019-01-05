import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: MyOrdersComponent },
  { path: 'admin/orders', component: AdminOrdersComponent },
  { path: 'admin/products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
