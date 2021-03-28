import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignThreePage } from './sign-three.page';

const routes: Routes = [
  {
    path: '',
    component: SignThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignThreePageRoutingModule {}
