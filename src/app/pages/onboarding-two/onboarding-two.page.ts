import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-onboarding-two',
  templateUrl: './onboarding-two.page.html',
  styleUrls: ['./onboarding-two.page.scss'],
})
export class OnboardingTwoPage implements OnInit {


  data = [
    {
      image: 'nature',
      title: 'Explore the wonders of nature this summer',
      description: 'Walk among those timeless wonders and feel all the power of nature'
    },
    {
      image: 'house',
      title: 'Good neighboors, wide open areas to enjoy',
      description: 'The place to live, grow and have a full life with your family around'
    },
    {
      image: 'tower',
      title: 'Travel around the world and enjoy life',
      description: 'Travel around the world, know the history, the people and their customs'
    }
  ];

  constructor() { }

  ngOnInit() {

  }

}
