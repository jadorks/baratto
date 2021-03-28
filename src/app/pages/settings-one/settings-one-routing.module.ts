import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsOnePage } from './settings-one.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsOnePageRoutingModule {}
