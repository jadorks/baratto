import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-color',
  templateUrl: './product-color.component.html',
  styleUrls: ['./product-color.component.scss'],
})
export class ProductColorComponent implements OnInit {
  @Input() color: string;
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
