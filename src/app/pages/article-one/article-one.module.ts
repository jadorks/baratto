import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticleOnePageRoutingModule } from './article-one-routing.module';

import { ArticleOnePage } from './article-one.page';
import { UtilsModule } from 'src/app/utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleOnePageRoutingModule,
    UtilsModule
  ],
  declarations: [ArticleOnePage]
})
export class ArticleOnePageModule {}
