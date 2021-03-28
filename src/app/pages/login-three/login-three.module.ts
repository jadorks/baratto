import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginThreePageRoutingModule } from './login-three-routing.module';

import { LoginThreePage } from './login-three.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    LoginThreePageRoutingModule
  ],
  declarations: [LoginThreePage]
})
export class LoginThreePageModule {}
