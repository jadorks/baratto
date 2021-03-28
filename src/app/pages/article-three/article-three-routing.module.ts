import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleThreePage } from './article-three.page';

const routes: Routes = [
  {
    path: '',
    component: ArticleThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleThreePageRoutingModule {}
