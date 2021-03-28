import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProfileThreePageRoutingModule } from './profile-three-routing.module';
import { ProfileThreePage } from './profile-three.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileThreePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProfileThreePage]
})
export class ProfileThreePageModule {}
