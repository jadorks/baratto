import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  itemsConfig = {
    spaceBetween: 3,
    slidesPerView: 1,
    centeredSlides: true
  };

  items = [
    {
      image:
        'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      name: 'iPod Wireless BT 2020',
      price: 149,
      badge: '-10%',
    },
    {
      image:
        'https://images.unsplash.com/photo-1569429568068-ed172490174d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      name: 'iPhone X Max 2020 Model',
      price: 299.99,
      badge: '-10%',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
