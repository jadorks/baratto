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
<<<<<<< HEAD
              loadChildren: () => import("../profile-three/profile-three.module").then( m => m.ProfileThreePageModule),
=======
              loadChildren: () => import("../settings-three/settings-three.module").then( m => m.SettingsThreePageModule),
>>>>>>> a85a5df82dfe06001161f344686d716bbc81dfe5
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
