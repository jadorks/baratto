import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginOnePageRoutingModule } from './login-one-routing.module';

import { LoginOnePage } from './login-one.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LoginOnePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginOnePage]
})
export class LoginOnePageModule {}
