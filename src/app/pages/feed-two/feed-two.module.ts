import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedTwoPageRoutingModule } from './feed-two-routing.module';

import { FeedTwoPage } from './feed-two.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { UtilsModule } from 'src/app/utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedTwoPageRoutingModule,
    ComponentsModule,
    UtilsModule
  ],
  declarations: [FeedTwoPage]
})
export class FeedTwoPageModule {}
