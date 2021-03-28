import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSubscribePageRoutingModule } from './modal-subscribe-routing.module';

import { ModalSubscribePage } from './modal-subscribe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSubscribePageRoutingModule
  ],
  declarations: [ModalSubscribePage]
})
export class ModalSubscribePageModule {}
