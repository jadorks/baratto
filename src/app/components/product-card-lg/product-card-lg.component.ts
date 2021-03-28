import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-lg',
  templateUrl: './product-card-lg.component.html',
  styleUrls: ['./product-card-lg.component.scss'],
})
export class ProductCardLgComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {}

}
