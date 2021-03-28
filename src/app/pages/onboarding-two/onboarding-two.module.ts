import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardingTwoPageRoutingModule } from './onboarding-two-routing.module';

import { OnboardingTwoPage } from './onboarding-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardingTwoPageRoutingModule
  ],
  declarations: [OnboardingTwoPage]
})
export class OnboardingTwoPageModule {}
