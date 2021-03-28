import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  categories = [
    { category: 'Bakery' },
    { category: 'Fresh Snacks' },
    { category: 'Fresh Meats' },
    { category: 'Fresh Fruits' },
    { category: 'Cooking Oils' },
  ];

  brands = [
    { brand: 'Grand Western' },
    { brand: 'Bimbo' },
    { brand: 'Heinz' },
    { brand: 'Helmans' },
    { brand: 'Coca Cola' },
  ];

  constructor() {}

  ngOnInit() {}

  getState(evt) {
    console.log(evt);
  }

}
