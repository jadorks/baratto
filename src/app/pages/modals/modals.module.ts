import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalsPageRoutingModule } from './modals-routing.module';
import { ModalsPage } from './modals.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalConfirmationPage } from '../modal-confirmation/modal-confirmation.page';
import { ModalArticlePage } from '../modal-article/modal-article.page';
import { ModalProfilePage } from '../modal-profile/modal-profile.page';
import { ModalLocationPage } from '../modal-location/modal-location.page';
import { ModalSubscribePage } from '../modal-subscribe/modal-subscribe.page';
import { ModalArticlePageModule } from '../modal-article/modal-article.module';
import { ModalLocationPageModule } from '../modal-location/modal-location.module';
import { ModalSubscribePageModule } from '../modal-subscribe/modal-subscribe.module';
import { ModalProfilePageModule } from '../modal-profile/modal-profile.module';
import { ModalConfirmationPageModule } from '../modal-confirmation/modal-confirmation.module';

@NgModule({
  entryComponents: [
    ModalConfirmationPage,
    ModalArticlePage,
    ModalLocationPage,
    ModalProfilePage,
    ModalSubscribePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalsPageRoutingModule,
    ComponentsModule,
    ModalArticlePageModule,
    ModalConfirmationPageModule,
    ModalLocationPageModule,
    ModalSubscribePageModule,
    ModalProfilePageModule
  ],
  declarations: [ModalsPage]
})
export class ModalsPageModule {}
