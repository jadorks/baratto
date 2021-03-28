import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  imgConfig = {
    spaceBetween: 3,
    slidesPerView: 1,
    centeredSlides: true
  };

  relatedConfig = {
    spaceBetween: 2,
    slidesPerView: 2,
  };

  product = {
    images: [
      {
        image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&q=80',
        description: ''
      },
      {
        image: 'https://images.unsplash.com/photo-1558004282-e2b2587e3e47?ixlib=rb-1.2.1&auto=format&fit=crop&w=450&q=80',
        description: ''
      },
      {
        image: 'https://images.unsplash.com/photo-1524010349062-860def6649c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=450&q=80',
        description: ''
      },
    ],
    name: 'Adidas Running Sport Xtreme',
    category: 'Men',
    price: 249.99,
    colors: [
      { name: 'Red', code: '#e63946'},
      { name: 'Navy', code: '#a8dadc'},
      { name: 'Blue', code: '#457b9d'},
      { name: 'Green', code: '#2a9d8f'},
      { name: 'Black', code: '#1d3557'},
    ],
    sizes: [40, 41, 43, 44, 45],
    about: 'Lightweight support and breathable that make your foot always keeps dry and cool. The rubber outsole offers impact cushioning, anti-twist, abrasion-resistant and anti-slip performance Comfortable insole the soft insole fits well and protect your ankle ,tongues and feet from hurt.',
    reviews: {
      overall: 4.5,
      reviews: 756,
      sold: 1211
    },
    related: [
      {
        image:
          'https://images.unsplash.com/photo-1563903530908-afdd155d057a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        text: 'Chanel Sunglasses UV Summer Ultra',
        price: 149,
        badge: '',
      },
      {
        image:
          'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=343&q=80',
        text: 'Vans Winnie SK8 Low Rider',
        price: 199.99,
        badge: '-10%',
      },
      {
        image:
          'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        text: 'Polaroid Instant Max 2020 Model',
        price: 299.99,
        badge: '',
      },
      {
        image:
          'https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        text: 'Nike Air Jordan Ultra Run',
        price: 1542.59,
        badge: '',
      },
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
