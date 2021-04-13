import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCatalogPage } from './user-catalog.page';

const routes: Routes = [
  {
    path: '',
    component: UserCatalogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserCatalogPageRoutingModule {}
