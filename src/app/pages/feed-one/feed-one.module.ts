import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedOnePageRoutingModule } from './feed-one-routing.module';

import { FeedOnePage } from './feed-one.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { UtilsModule } from 'src/app/utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedOnePageRoutingModule,
    ComponentsModule,
    UtilsModule
  ],
  declarations: [FeedOnePage]
})
export class FeedOnePageModule {}
