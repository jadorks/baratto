import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardingOnePage } from './onboarding-one.page';

const routes: Routes = [
  {
    path: '',
    component: OnboardingOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingOnePageRoutingModule {}
