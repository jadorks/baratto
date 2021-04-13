import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserCatalogPageRoutingModule } from './user-catalog-routing.module';

import { UserCatalogPage } from './user-catalog.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserCatalogPageRoutingModule,
    ComponentsModule
  ],
  declarations: [UserCatalogPage]
})
export class UserCatalogPageModule {}
