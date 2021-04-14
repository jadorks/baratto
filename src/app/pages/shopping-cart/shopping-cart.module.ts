import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ShoppingCartPageRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartPage } from './shopping-cart.page';
import { ComponentsModule } from 'src/app/components/components.module';

import { Angular4PaystackModule } from 'angular4-paystack';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ShoppingCartPageRoutingModule,
    ComponentsModule,
    Angular4PaystackModule.forRoot('pk_test_f6096b2cf6577c0741535bde96177c80513ffc3a'),
  ],
  declarations: [ShoppingCartPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShoppingCartPageModule {}
