import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageCardsPageRoutingModule } from './home-page-cards-routing.module';
import { HomePageCardsPage } from './home-page-cards.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageCardsPageRoutingModule,
    ComponentsModule

  ],
  declarations: [HomePageCardsPage]
})
export class HomePageCardsPageModule {}
