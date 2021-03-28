import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginTwoPageRoutingModule } from './login-two-routing.module';

import { LoginTwoPage } from './login-two.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    LoginTwoPageRoutingModule,
  ],
  declarations: [LoginTwoPage]
})
export class LoginTwoPageModule {}
