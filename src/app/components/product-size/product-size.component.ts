import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-size',
  templateUrl: './product-size.component.html',
  styleUrls: ['./product-size.component.scss'],
})
export class ProductSizeComponent implements OnInit {

  @Input() size: number;
  @Output() updateState: EventEmitter<boolean>;

  active = false;

  constructor() {
    this.updateState = new EventEmitter();
  }

  ngOnInit() {}

  setActive($event) {
    this.active = !this.active;
    this.updateState.emit(this.active);
  }
}
