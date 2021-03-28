import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsTwoPageRoutingModule } from './settings-two-routing.module';

import { SettingsTwoPage } from './settings-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsTwoPageRoutingModule
  ],
  declarations: [SettingsTwoPage]
})
export class SettingsTwoPageModule {}
