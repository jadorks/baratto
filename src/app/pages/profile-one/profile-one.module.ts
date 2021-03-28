import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileOnePageRoutingModule } from './profile-one-routing.module';

import { ProfileOnePage } from './profile-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileOnePageRoutingModule
  ],
  declarations: [ProfileOnePage]
})
export class ProfileOnePageModule {}
