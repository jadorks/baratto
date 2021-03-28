import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleOnePage } from './article-one.page';

const routes: Routes = [
  {
    path: '',
    component: ArticleOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleOnePageRoutingModule {}
