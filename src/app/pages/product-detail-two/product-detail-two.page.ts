import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail-two',
  templateUrl: './product-detail-two.page.html',
  styleUrls: ['./product-detail-two.page.scss'],
})
export class ProductDetailTwoPage implements OnInit {
  isFavorite: boolean;

  product = {
    title: 'Iphone XR Pro 256GB',
    category: 'Electronics',
    price: 899,
    images: [
      {
        image: 'https://images.unsplash.com/photo-1571380401583-72ca84994796?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80',
        caption: 'Lorem ipsum dolor arem et'
      },
      {
        image: 'https://images.unsplash.com/photo-1570642193983-c5c23fc09eba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80',
        caption: 'Cocoil Body Losion'
      },
      {
        image: 'https://images.unsplash.com/photo-1570633545582-cd25ed6e8497?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80',
        caption: 'Cocoil Body Losion'
      }
    ],
    comments: [
      {
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        author: 'Jane Smith',
        date: new Date(2020, 6, 10, 19, 25),
        comment: 'Great article hope it ready asap',
      },
      {
        avatar: 'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        author: 'Andy Vazquez',
        date: new Date(2020, 6, 10, 19, 20),
        comment: 'The product was a result of years of trial and error, according to the executive.',
      },
      {
        avatar: 'https://images.unsplash.com/photo-1554384645-13eab165c24b?ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
        author: 'Joan Rodriguez',
        date: new Date(2020, 6, 10, 19, 15),
        comment: 'Unlike other rush initiatives undertaken by the company once the virus hit.',
      },
    ]
  };

  imageConfig = {
    centeredSlides: true,
    slidesPerView: 1,
  };

  constructor() {}

  ngOnInit() {}

  favorite() {
    this.isFavorite = !this.isFavorite;
  }
}
