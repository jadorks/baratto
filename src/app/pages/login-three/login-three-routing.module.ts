import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginThreePage } from './login-three.page';

const routes: Routes = [
  {
    path: '',
    component: LoginThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginThreePageRoutingModule {}
