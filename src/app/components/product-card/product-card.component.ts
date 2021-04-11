import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {

  @Input() product: any;

  gradients = ['blue_to_pink', 'blue_to_cyan', 'navy_to_cyan', 'green_to_pink']
  selected = null;

  constructor() { }

  ngOnInit() {
    this.selected = this.gradients[this.getRandomIntInclusive(0,2)];
  }

  private getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

}
