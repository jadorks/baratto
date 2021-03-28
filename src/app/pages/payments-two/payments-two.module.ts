import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentsTwoPageRoutingModule } from './payments-two-routing.module';

import { PaymentsTwoPage } from './payments-two.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    PaymentsTwoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PaymentsTwoPage]
})
export class PaymentsTwoPageModule {}
