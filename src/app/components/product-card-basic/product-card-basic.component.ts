import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card-basic',
  templateUrl: './product-card-basic.component.html',
  styleUrls: ['./product-card-basic.component.scss'],
})
export class ProductCardBasicComponent implements OnInit {

  @Input() product: any;

  constructor() { }

  ngOnInit() {}

}
