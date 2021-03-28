import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentsOnePage } from './payments-one.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentsOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsOnePageRoutingModule {}
