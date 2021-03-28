import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
})
export class CreditCardComponent implements OnInit {

  @Input() cardColor = 'card';
  @Input() type: string;
  @Input() number = '**** **** **** ****';
  @Input() owner = 'John Doe';
  @Input() expires = '01/00';

  constructor() { }

  ngOnInit() {}

}
