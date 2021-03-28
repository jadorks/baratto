import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignThreePageRoutingModule } from './sign-three-routing.module';

import { SignThreePage } from './sign-three.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    SignThreePageRoutingModule
  ],
  declarations: [SignThreePage]
})
export class SignThreePageModule {}
