import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleTwoPage } from './article-two.page';

const routes: Routes = [
  {
    path: '',
    component: ArticleTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleTwoPageRoutingModule {}
