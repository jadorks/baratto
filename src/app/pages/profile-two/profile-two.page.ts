import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-two',
  templateUrl: './profile-two.page.html',
  styleUrls: ['./profile-two.page.scss'],
})
export class ProfileTwoPage implements OnInit {
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
      text: 'War section the notional night cops reporter',
    },
    {
      image: 'https://images.unsplash.com/photo-1592770108625-15c2d4aa56b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=361&q=80',
      text: 'iPad app information wants to be free',
    },
    {
      image: 'https://images.unsplash.com/photo-1592840331052-16e15c2c6f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      text: 'Lucius Nieman want atomization overcome tabloid',
    },
  ];

  catConfig = {
    spaceBetween: 2,
    slidesPerView: 2.2,
  };

  favConfig = {
    spaceBetween: 2,
    slidesPerView: 2.2,
  };

  constructor() {}

  ngOnInit() {}
}
