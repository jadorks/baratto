import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedThreePageRoutingModule } from './feed-three-routing.module';

import { FeedThreePage } from './feed-three.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { UtilsModule } from 'src/app/utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedThreePageRoutingModule,
    ComponentsModule,
    UtilsModule
  ],
  declarations: [FeedThreePage]
})
export class FeedThreePageModule {}
