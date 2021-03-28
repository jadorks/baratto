import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductDetailTwoPageRoutingModule } from './product-detail-two-routing.module';
import { ProductDetailTwoPage } from './product-detail-two.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { UtilsModule } from 'src/app/utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailTwoPageRoutingModule,
    ComponentsModule,
    UtilsModule
  ],
  declarations: [ProductDetailTwoPage]
})
export class ProductDetailTwoPageModule {}
