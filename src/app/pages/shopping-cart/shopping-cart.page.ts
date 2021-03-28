import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {

  order = {
    items: [
      {
        image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&q=80',
        name: 'Adidas Running Sport Xtreme',
        category: 'Men',
        price: 249.99,
        color: 'Red',
        size: 43,
      },
      {
        image: 'https://images.unsplash.com/photo-1558004282-e2b2587e3e47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&q=80',
        name: 'Nike Air Xtreme',
        category: 'Men',
        price: 114.99,
        color: 'Navy',
        size: 44,
      },
      {
        image: 'https://images.unsplash.com/photo-1524010349062-860def6649c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&q=80',
        name: 'Adidas Sport Xtreme Ultra',
        category: 'Men',
        price: 209.99,
        color: 'Black',
        size: 41,
      }
    ],
    tax: 15,
    taxAmount: 86.24,
    shipping: 49.99,
  };

  couponForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.calcInvoice(this.order);

    this.couponForm = this.fb.group({
      coupon: [null],
    });
  }

  calcInvoice(order) {
    let subTotal = 0;
    let total = 0;

    subTotal = order.items.reduce((acc, value) => acc + value.price, 0);
    total = subTotal + order.taxAmount + order.shipping;

    Object.assign(order, { subTotal }, { total });
  }

  applyCode() {
    if (this.couponForm.valid) {
      // do something
    } else {
      // do smething
    }
  }
}
