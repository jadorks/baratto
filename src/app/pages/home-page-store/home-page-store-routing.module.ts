import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageStorePage } from './home-page-store.page';

const routes: Routes = [
  {
    path: '',
    component: HomePageStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageStorePageRoutingModule {}
