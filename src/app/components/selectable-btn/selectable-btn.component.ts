import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selectable-btn',
  templateUrl: './selectable-btn.component.html',
  styleUrls: ['./selectable-btn.component.scss'],
})
export class SelectableBtnComponent {

  @Input() text: string;
  @Output() state: EventEmitter<any>;

  active = false;

  constructor() {
    this.state = new EventEmitter();
   }

  setActive() {
    this.active = !this.active;
    const values = {
      text: this.text,
      state: this.active
    };
    this.state.emit(values);
  }
}
