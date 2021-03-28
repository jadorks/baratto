import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageStorePageRoutingModule } from './home-page-store-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomePageStorePage } from './home-page-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageStorePageRoutingModule,
    ComponentsModule
  ],
  declarations: [HomePageStorePage]
})
export class HomePageStorePageModule {}
