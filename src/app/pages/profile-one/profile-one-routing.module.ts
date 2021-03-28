import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileOnePage } from './profile-one.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileOnePageRoutingModule {}
