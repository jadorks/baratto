import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-onboarding-one',
  templateUrl: './onboarding-one.page.html',
  styleUrls: ['./onboarding-one.page.scss'],
})
export class OnboardingOnePage implements OnInit {

  @ViewChild(IonSlides, { static: true }) slides: IonSlides;

  btnText = 'Prev';

  data = [
    {
      img: 'slide-one',
      title: 'Application screens ready to use',
      text: '20+ prebuilt screens to save you countless hours while writing boilerplate code'
    },
    {
      img: 'slide-two',
      title: 'Payment screens with credit card validators',
      text: 'Build your app in record time with our prebuild screens and reusable components'
    },
    {
      img: 'slide-three',
      title: 'Several screens with custom components',
      text: 'High Quality screens with modern design patterns with latest trends in mind'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  slidePrev() {
    this.slides.slidePrev();
  }

  slideNext() {
    this.slides.slideNext();
  }

}
