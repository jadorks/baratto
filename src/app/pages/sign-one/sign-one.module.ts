import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignOnePageRoutingModule } from './sign-one-routing.module';

import { SignOnePage } from './sign-one.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    SignOnePageRoutingModule
  ],
  declarations: [SignOnePage]
})
export class SignOnePageModule {}
