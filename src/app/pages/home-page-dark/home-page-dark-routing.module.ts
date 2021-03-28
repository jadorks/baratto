import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageDarkPage } from './home-page-dark.page';

const routes: Routes = [
  {
    path: '',
    component: HomePageDarkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageDarkPageRoutingModule {}
