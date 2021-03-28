import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignOnePage } from './sign-one.page';

const routes: Routes = [
  {
    path: '',
    component: SignOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignOnePageRoutingModule {}
