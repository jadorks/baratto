import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsOnePageRoutingModule } from './settings-one-routing.module';

import { SettingsOnePage } from './settings-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsOnePageRoutingModule
  ],
  declarations: [SettingsOnePage]
})
export class SettingsOnePageModule {}
