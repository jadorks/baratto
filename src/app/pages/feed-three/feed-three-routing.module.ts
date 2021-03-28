import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedThreePage } from './feed-three.page';

const routes: Routes = [
  {
    path: '',
    component: FeedThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedThreePageRoutingModule {}
