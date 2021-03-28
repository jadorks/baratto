import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-sm',
  templateUrl: './product-card-sm.component.html',
  styleUrls: ['./product-card-sm.component.scss'],
})
export class ProductCardSmComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {}

}
