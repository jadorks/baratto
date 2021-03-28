import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalArticlePage } from '../modal-article/modal-article.page';
import { ModalConfirmationPage } from '../modal-confirmation/modal-confirmation.page';
import { ModalLocationPage } from '../modal-location/modal-location.page';
import { ModalProfilePage } from '../modal-profile/modal-profile.page';
import { ModalSubscribePage } from '../modal-subscribe/modal-subscribe.page';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.page.html',
  styleUrls: ['./modals.page.scss'],
})
export class ModalsPage implements OnInit {

  confirmation = {
    icon: 'assets/illustrations/confirm.svg',
    title: 'Thanks you for your purchase',
    text:
      'Your order was placed successfully. We will come back to you as soon we ship it to you.',
  };

  subscribe = {
    icon: 'assets/illustrations/mail.svg',
    title: 'Sign Up to our Newsletter',
    text:
      'Subscribe and receive amazing offers and discounts right to your inbox every weekend.',
  };

  location = {
    icon: 'assets/illustrations/map.svg',
    title: 'See places near you',
    text:
      'To access places near you, turn on your location while using the app',
  };

  article = {
    author: {
      avatar: 'https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      name: 'Michelle Winston',
      caption: 'Founder & CEO @ Mobilethemes'
    },
    headline: 'Twitter may slow down users’ ability to ‘like’ tweets containing misinformation',
    body: 'The feature was discovered by reverse engineer Jane Manchun Wong in the Twitter app code. She confirms the addition doesn’t prevent a user from continuing to “Like” the tweet.'
  };

  profile = {
    avatar:
      'https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    fullName: 'Michelle Winston',
    bio:
      'I am a 27-year-old government politician who enjoys glamping, walking and theatre.',
    social: [
      {
        name: 'facebook',
        url: '',
      },
      {
        name: 'instagram',
        url: '',
      },
      {
        name: 'twitter',
        url: '',
      },
      {
        name: 'twitch',
        url: '',
      },
    ],
  };

  constructor(private modalController: ModalController) {}

  async confirm() {
    const modal = await this.modalController.create({
      component: ModalConfirmationPage,
      cssClass: 'modal-container',
      componentProps: {
        info: this.confirmation,
      },
    });
    return await modal.present();
  }

  async getProfile() {
    const modal = await this.modalController.create({
      component: ModalProfilePage,
      cssClass: 'modal-container',
      componentProps: {
        info: this.profile,
      },
    });
    return await modal.present();
  }

  async turnLocation() {
    const modal = await this.modalController.create({
      component: ModalLocationPage,
      cssClass: 'modal-container',
      componentProps: {
        info: this.location,
      },
    });
    return await modal.present();
  }

  async showArticle() {
    const modal = await this.modalController.create({
      component: ModalArticlePage,
      cssClass: 'modal-container',
      componentProps: {
        info: this.article,
      },
    });
    return await modal.present();
  }

  async subscribeMail() {
    const modal = await this.modalController.create({
      component: ModalSubscribePage,
      cssClass: 'modal-container',
      componentProps: {
        info: this.subscribe,
      },
    });
    return await modal.present();
  }

  ngOnInit() {}
}
