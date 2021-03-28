import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailTwoPage } from './product-detail-two.page';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductDetailTwoPageRoutingModule {}
