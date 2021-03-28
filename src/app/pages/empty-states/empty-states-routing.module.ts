import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyStatesPage } from './empty-states.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyStatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmptyStatesPageRoutingModule {}
