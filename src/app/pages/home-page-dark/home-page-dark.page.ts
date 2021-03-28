import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-dark',
  templateUrl: './home-page-dark.page.html',
  styleUrls: ['./home-page-dark.page.scss'],
})
export class HomePageDarkPage implements OnInit {

  categories = [
    {
      image:
        'https://images.unsplash.com/photo-1467385829985-2b0fb82b5193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      name: 'Outdoor',
      items: '350',
    },
    {
      image:
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      name: 'Shopping',
      items: '10',
    },
    {
      image:
        'https://images.unsplash.com/photo-1504465039710-0f49c0a47eb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      name: 'News',
      items: '170',
    },
  ];

  favorites = [
    {
      image: 'https://images.unsplash.com/photo-1592771404380-467f535c7c4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      text: 'War section the notional night',
    },
    {
      image: 'https://images.unsplash.com/photo-1592770108625-15c2d4aa56b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=361&q=80',
      text: 'iPad app wants to be free',
    },
    {
      image: 'https://images.unsplash.com/photo-1592840331052-16e15c2c6f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      text: 'Lucius Nieman atomization',
    },
  ];

  slideConfig = {
    spaceBetween: 2,
    slidesPerView: 2.2,
  };

  background = {
    backgroundImage:
      'url(https://images.unsplash.com/photo-1602662042935-f5f5aa7a9db7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80)',
  };

  constructor() { }

  ngOnInit() {
  }

}
