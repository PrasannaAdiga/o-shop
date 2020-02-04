import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./page/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./page/shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
  },
  {
    path: 'check-out',
    loadChildren: () => import('./page/check-out/check-out.module').then( m => m.CheckOutPageModule)
  },
  {
    path: 'order-success',
    loadChildren: () => import('./page/order-success/order-success.module').then( m => m.OrderSuccessPageModule)
  },
  {
    path: 'my/orders',
    loadChildren: () => import('./page/my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
  },
  {
    path: 'admin/products',
    loadChildren: () => import('./page/admin/admin-products/admin-products.module').then( m => m.AdminProductsPageModule)
  },
  {
    path: 'admin/orders',
    loadChildren: () => import('./page/admin/admin-orders/admin-orders.module').then( m => m.AdminOrdersPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
