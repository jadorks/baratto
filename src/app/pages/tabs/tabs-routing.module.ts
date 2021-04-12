import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
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
              loadChildren: () => import("../categories/categories.module").then( m => m.CategoriesPageModule ),
            }
          ]
      },
      {
        path: 'add',
        children:
          [
            {
              path: '',
              loadChildren: () => import("../add-item/add-item.module").then( m => m.AddItemPageModule ),
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
              loadChildren: () => import("../settings-three/settings-three.module").then( m => m.SettingsThreePageModule),
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
