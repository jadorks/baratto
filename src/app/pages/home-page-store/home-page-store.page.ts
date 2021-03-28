import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-store',
  templateUrl: './home-page-store.page.html',
  styleUrls: ['./home-page-store.page.scss'],
})
export class HomePageStorePage implements OnInit {
  products = [
    {
      image: 'assets/products/shoe1.png',
      title: 'Nike Runner XT 200',
      price: 245.99,
      category: 'Running',
      gradient: 'blue_to_pink',
      discount: '0.12'
    },
    {
      image: 'assets/products/shoe5.png',
      title: 'Nike Dual Fusion GT',
      price: 405.99,
      category: 'Running',
      gradient: 'blue_to_cyan'
    },
    {
      image: 'assets/products/shoe3.png',
      title: 'Nike Air Jordan Jnr',
      price: 99.99,
      category: 'Urban Style',
      gradient: 'navy_to_cyan',
      discount: '0.40'
    },
    {
      image: 'assets/products/shoe4.png',
      title: 'Nike Air Max Junior',
      price: 99.99,
      category: 'Urban Style',
      gradient: 'green_to_pink'
    },
  ];

  ads = {
    image: 'assets/products/shoe-ad.png',
    label: 'Sneakers',
    category: 'New Collection',
    gradient: 'blue_to_cyan'
  };

  slideConfig = {
    spaceBetween: 2,
    slidesPerView: 1.4,
  };

  flashConfig = {
    spaceBetween: 2,
    slidesPerView: 2.3
  };

  constructor() {}

  ngOnInit() {}
}
