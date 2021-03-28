import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticleThreePageRoutingModule } from './article-three-routing.module';

import { ArticleThreePage } from './article-three.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { UtilsModule } from 'src/app/utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleThreePageRoutingModule,
    ComponentsModule,
    UtilsModule
  ],
  declarations: [ArticleThreePage]
})
export class ArticleThreePageModule {}
