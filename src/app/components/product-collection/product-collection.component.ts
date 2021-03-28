import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-collection',
  templateUrl: './product-collection.component.html',
  styleUrls: ['./product-collection.component.scss'],
})
export class ProductCollectionComponent implements OnInit {

  @Input() data: any;
  @Input() textShadow: boolean;

  constructor() { }

  ngOnInit() {}

}
