import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedOnePage } from './feed-one.page';

const routes: Routes = [
  {
    path: '',
    component: FeedOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedOnePageRoutingModule {}
