import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileTwoPage } from './profile-two.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileTwoPageRoutingModule {}
