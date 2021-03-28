import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalConfirmationPage } from './modal-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: ModalConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalConfirmationPageRoutingModule {}
