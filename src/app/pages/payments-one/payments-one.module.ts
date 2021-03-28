import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentsOnePageRoutingModule } from './payments-one-routing.module';

import { PaymentsOnePage } from './payments-one.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    PaymentsOnePageRoutingModule
  ],
  declarations: [PaymentsOnePage]
})
export class PaymentsOnePageModule {}
