import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsThreePageRoutingModule } from './settings-three-routing.module';

import { SettingsThreePage } from './settings-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsThreePageRoutingModule
  ],
  declarations: [SettingsThreePage]
})
export class SettingsThreePageModule {}
