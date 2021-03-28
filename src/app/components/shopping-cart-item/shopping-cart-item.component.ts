import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss'],
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() image: string;
  @Input() name: string;
  @Input() size: string;
  @Input() color: string;
  @Input() price: number;

  constructor() { }

  ngOnInit() {}

}
