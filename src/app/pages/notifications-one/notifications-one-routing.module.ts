import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsOnePage } from './notifications-one.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationsOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsOnePageRoutingModule {}
