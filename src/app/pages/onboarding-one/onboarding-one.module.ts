import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardingOnePageRoutingModule } from './onboarding-one-routing.module';

import { OnboardingOnePage } from './onboarding-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardingOnePageRoutingModule
  ],
  declarations: [OnboardingOnePage]
})
export class OnboardingOnePageModule {}
