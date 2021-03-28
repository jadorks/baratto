import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children:
          [
            {
              path: '',
              loadChildren: () => import("../home-page-store/home-page-store.module").then( m => m.HomePageStorePageModule),
            }
          ]
      },
      {
        path: 'shop',
        children:
          [
            {
              path: '',
              loadChildren: () => import("../catalog/catalog.module").then( m => m.CatalogPageModule),
            }
          ]
      },
      {
        path: 'favorites',
        children:
          [
            {
              path: '',
              loadChildren: () => import("../favorites/favorites.module").then( m => m.FavoritesPageModule),
            }
          ]
      },
      {
        path: 'profile',
        children:
          [
            {
              path: '',
              loadChildren: () => import("../profile-one/profile-one.module").then( m => m.ProfileOnePageModule),
            }
          ]
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
