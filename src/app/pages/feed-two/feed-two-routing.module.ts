import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedTwoPage } from './feed-two.page';

const routes: Routes = [
  {
    path: '',
    component: FeedTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedTwoPageRoutingModule {}
