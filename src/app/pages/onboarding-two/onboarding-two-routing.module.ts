import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardingTwoPage } from './onboarding-two.page';

const routes: Routes = [
  {
    path: '',
    component: OnboardingTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingTwoPageRoutingModule {}
