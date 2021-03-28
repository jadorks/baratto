import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticleTwoPageRoutingModule } from './article-two-routing.module';

import { ArticleTwoPage } from './article-two.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { UtilsModule } from 'src/app/utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleTwoPageRoutingModule,
    ComponentsModule,
    UtilsModule
  ],
  declarations: [ArticleTwoPage]
})
export class ArticleTwoPageModule {}
