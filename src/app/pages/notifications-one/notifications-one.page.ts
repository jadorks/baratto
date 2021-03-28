import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications-one',
  templateUrl: './notifications-one.page.html',
  styleUrls: ['./notifications-one.page.scss'],
})
export class NotificationsOnePage implements OnInit {

  notifications = [
    {
      avatar: 'https://images.unsplash.com/photo-1556637641-0ac7101023f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80',
      title: 'McDonalds',
      subtitle: 'You got 20% voucher offer from your last cart',
      date: new Date()
    },
    {
      avatar: 'https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80',
      title: 'Hannah Smith',
      subtitle: 'sent you an invitation',
      date:  new Date(2020, 6, 10)
    },
    {
      avatar: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80',
      title: 'Roland McDonalds',
      subtitle: 'asked you to join in a group',
      date:  new Date(2020, 6, 1)
    },
    {
      avatar: 'https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80',
      title: 'Starbucks',
      subtitle: 'Save up to 50% OFF on your weekend purchases',
      date:  new Date(2020, 5, 25)
    },
    {
      avatar: 'https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80',
      title: 'Maria Gutierrez',
      subtitle: 'asked you to join in a group',
      date:  new Date(2020, 4, 16)
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
