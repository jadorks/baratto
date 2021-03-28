import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageCardsPage } from './home-page-cards.page';

const routes: Routes = [
  {
    path: '',
    component: HomePageCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageCardsPageRoutingModule {}
