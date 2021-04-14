<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule ),
    canLoad: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login-three/login-three.module').then( m => m.LoginThreePageModule ),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/sign-three/sign-three.module').then( m => m.SignThreePageModule ),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'forgot-pass',
    loadChildren: () => import('./pages/forgot-pass/forgot-pass.module').then( m => m.ForgotPassPageModule),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings-two/settings-two.module').then( m => m.SettingsTwoPageModule ),
    canLoad: [AuthGuard]
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then( m => m.ProductDetailPageModule ),
    canLoad: [AuthGuard]
  },
  {
    path: 'category/:id',
    loadChildren: () => import('./pages/catalog/catalog.module').then( m => m.CatalogPageModule ),
    canLoad: [AuthGuard]
  },
  {
    path: 'user-catalog',
    loadChildren: () => import('./pages/user-catalog/user-catalog.module').then( m => m.UserCatalogPageModule )
  },
  {
    path: 'user-details/:id',
    loadChildren: () => import('./pages/user-details/user-details.module').then( m => m.UserDetailsPageModule )
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'edit-product/:id',
    loadChildren: () => import('./pages/edit-product/edit-product.module').then( m => m.EditProductPageModule )
  },
  {
    path: 'checkout/:id',
    loadChildren: () => import('./pages/shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule )
  },


];
=======
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login-three/login-three.module').then( m => m.LoginThreePageModule ),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/sign-three/sign-three.module').then( m => m.SignThreePageModule ),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'forgot-pass',
    loadChildren: () => import('./pages/forgot-pass/forgot-pass.module').then( m => m.ForgotPassPageModule),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings-two/settings-two.module').then( m => m.SettingsTwoPageModule ),
    canLoad: [AuthGuard]
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then( m => m.ProductDetailPageModule ),
    canLoad: [AuthGuard]
  },
  {
    path: 'category/:id',
    loadChildren: () => import('./pages/catalog/catalog.module').then( m => m.CatalogPageModule ),
    canLoad: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule)
  },  {
    path: 'chatbox',
    loadChildren: () => import('./chatbox/chatbox.module').then( m => m.ChatboxPageModule)
  }
>>>>>>> e0eab6c7a908925b43036e237662f9ad877f87c1

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
