import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  features = [
    {
      icon: 'phone-portrait-outline',
      text: '30+ App Screens'
    },
    {
      icon: 'grid-outline',
      text: '30+ Components'
    },
    {
      icon: 'shapes-outline',
      text: 'Vector based images'
    },
    {
      icon: 'build-outline',
      text: 'Form validators'
    },
    {
      icon: 'color-palette-outline',
      text: 'Custom colors'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
