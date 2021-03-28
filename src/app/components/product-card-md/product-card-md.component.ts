import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-md',
  templateUrl: './product-card-md.component.html',
  styleUrls: ['./product-card-md.component.scss'],
})
export class ProductCardMdComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {}

}
