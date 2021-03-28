import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsOnePageRoutingModule } from './notifications-one-routing.module';

import { NotificationsOnePage } from './notifications-one.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { UtilsModule } from 'src/app/utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsOnePageRoutingModule,
    ComponentsModule,
    UtilsModule
  ],
  declarations: [NotificationsOnePage]
})
export class NotificationsOnePageModule {}
