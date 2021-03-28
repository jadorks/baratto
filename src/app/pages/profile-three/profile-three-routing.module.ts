import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileThreePage } from './profile-three.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileThreePageRoutingModule {}
