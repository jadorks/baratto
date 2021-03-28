import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSubscribePage } from './modal-subscribe.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSubscribePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSubscribePageRoutingModule {}
