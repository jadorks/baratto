import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalConfirmationPageRoutingModule } from './modal-confirmation-routing.module';

import { ModalConfirmationPage } from './modal-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalConfirmationPageRoutingModule
  ],
  declarations: [ModalConfirmationPage]
})
export class ModalConfirmationPageModule {}
