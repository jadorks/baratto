import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-states',
  templateUrl: './empty-states.page.html',
  styleUrls: ['./empty-states.page.scss'],
})
export class EmptyStatesPage implements OnInit {

  empty = [
    {
      image: 'assets/illustrations/internet.svg',
      title: 'No internet',
      caption: 'Check your internet connection and try again'
    },
    {
      image: 'assets/illustrations/orders.svg',
      title: 'No orders placed',
      caption: 'Start shopping today with our amazing offers'
    },
    {
      image: 'assets/illustrations/chats.svg',
      title: 'Nothing to show',
      caption: 'Start conversations with your friends'
    },
    {
      image: 'assets/illustrations/location.svg',
      title: 'No location available',
      caption: 'Turn on your location to give you the best options'
    },
    {
      image: 'assets/illustrations/messages.svg',
      title: 'No messages to show',
      caption: 'Send a message and start a thread'
    }
  ];

  slideConfig = {
    slidesPerColumn: 1,
    slidesPerView: 1,
    centeredSlides: true
  };

  constructor() { }

  ngOnInit() {
  }

}
