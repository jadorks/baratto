import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignTwoPage } from './sign-two.page';

const routes: Routes = [
  {
    path: '',
    component: SignTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignTwoPageRoutingModule {}
