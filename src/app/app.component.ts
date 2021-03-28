import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      icon: 'home-outline',
      url: '/home',
      open: true
    },
    {
      title: 'Onboarding',
      icon: 'rocket-outline',
      open: false,
      children: [
        {
          title: 'Dark w/ buttons',
          url: '/onboarding-one',
        },
        {
          title: 'w/ CTA button',
          url: '/onboarding-two',
        },
      ],
    },
    {
      title: 'Home Pages',
      icon: 'grid-outline',
      open: false,
      isNew: true,
      children: [
        {
          title: 'Dark w/ slides',
          url: '/home-page-dark',
        },
        {
          title: 'Big Cards',
          url: '/home-page-cards',
        },
        {
          title: 'E-commerce',
          url: '/home-page-store',
        },
      ],
    },
    {
      title: 'Login',
      icon: 'enter-outline',
      open: false,
      children: [
        {
          title: 'Fullscreen Image',
          url: '/login-one',
        },
        {
          title: 'Image Background',
          url: '/login-two',
        },
        {
          title: 'Basic Form',
          url: '/login-three',
        },
      ],
    },
    {
      title: 'Sign Up',
      icon: 'key-outline',
      open: false,
      children: [
        {
          title: 'Fullscreen Image',
          url: '/sign-one',
        },
        {
          title: 'Image Background',
          url: '/sign-two',
        },
        {
          title: 'Basic with social buttons',
          url: '/sign-three',
        },
      ],
    },
    {
      title: 'Profile',
      icon: 'person-outline',
      open: false,
      children: [
        {
          title: 'w/ Gallery',
          url: '/profile-one',
        },
        {
          title: 'w/ Categories',
          url: '/profile-two',
        },
        {
          title: 'w/ Tabs',
          url: '/profile-three',
        },
      ],
    },
    {
      title: 'Feed',
      icon: 'newspaper-outline',
      open: false,
      children: [
        {
          title: 'News Blocks',
          url: '/feed-one',
        },
        {
          title: 'Block Cards',
          url: '/feed-two',
        },
        {
          title: 'w/ Stories',
          url: '/feed-three',
        },
      ],
    },
    {
      title: 'Article',
      icon: 'document-text-outline',
      open: false,
      children: [
        {
          title: 'Fullscreen Article',
          url: '/article-one',
        },
        {
          title: 'w/ Image and quote',
          url: '/article-two',
        },
        {
          title: 'w/ Background color',
          url: '/article-three',
        },
      ],
    },
    {
      title: 'Ecommerce',
      icon: 'cart-outline',
      open: false,
      children: [
        {
          title: 'Catalog',
          url: '/catalog',
        },
        {
          title: 'Product Detail',
          url: '/product-detail',
        },
        {
          title: 'Product Detail II',
          url: '/product-detail-two',
          isNew: true
        },
        {
          title: 'Favorites',
          url: '/favorites',
        },
        {
          title: 'Shopping Cart',
          url: '/shopping-cart',
        },
      ],
    },
    {
      title: 'Payment',
      icon: 'card-outline',
      open: false,
      children: [
        {
          title: 'w/ Input Validator',
          url: '/payments-one',
        },
        {
          title: 'w/ Credit Card',
          url: '/payments-two',
        },
      ],
    },
    {
      title: 'Notifications',
      icon: 'notifications-outline',
      open: false,
      children: [
        {
          title: 'Basic',
          url: '/notifications-one',
        },
        {
          title: 'w/ Header and buttons',
          url: '/notifications-two',
        },
      ],
    },
    {
      title: 'Utils',
      icon: 'cube-outline',
      open: false,
      isNew: true,
      children: [
        {
          title: 'Filters',
          url: '/filter',
        },
        {
          title: 'Modals',
          url: '/modals',
        },
        {
          title: 'Empty States',
          url: '/empty-states',
        },
      ],
    },
    {
      title: 'Settings',
      icon: 'settings-outline',
      open: false,
      children: [
        {
          title: 'w/ Colour Icons',
          url: '/settings-one',
        },
        {
          title: 'Basic Settings',
          url: '/settings-two',
        },
        {
          title: 'w/ Profile Header',
          url: '/settings-three',
        },
      ],
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {}

  toggleSectionMenu(value: any, index: number) {
    if(this.selectedIndex == index && value.open == true)  {
      value.open = false;
    } else if(this.selectedIndex == index && value.open == false){
      value.open = true;
    } else {
      this.appPages[this.selectedIndex].open = false;
      value.open = !value.open;
      this.selectedIndex = index;
    }
  }

}
