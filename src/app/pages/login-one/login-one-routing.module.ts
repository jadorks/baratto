import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginOnePage } from './login-one.page';

const routes: Routes = [
  {
    path: '',
    component: LoginOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginOnePageRoutingModule {}
