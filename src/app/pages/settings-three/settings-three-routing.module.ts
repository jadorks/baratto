import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsThreePage } from './settings-three.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsThreePageRoutingModule {}
