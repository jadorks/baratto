import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignTwoPageRoutingModule } from './sign-two-routing.module';

import { SignTwoPage } from './sign-two.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    SignTwoPageRoutingModule
  ],
  declarations: [SignTwoPage]
})
export class SignTwoPageModule {}
