import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginTwoPage } from './login-two.page';

const routes: Routes = [
  {
    path: '',
    component: LoginTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginTwoPageRoutingModule {}
