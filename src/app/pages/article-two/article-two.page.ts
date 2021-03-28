import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-two',
  templateUrl: './article-two.page.html',
  styleUrls: ['./article-two.page.scss'],
})
export class ArticleTwoPage implements OnInit {
  background = {
    backgroundImage:
      'url(https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80)',
  };

  article = {
    category: 'Technology',
    title:
      'Apple began work on the Watch’s handwashing feature years before COVID-19',
    short:
      'Handwashing for the Apple Watch happily slotted alongside face masks for Memojis in the list of COVID-19-related features the company introduced at last week’s WWDC keynote. It’s a pedestrian action, something we take entirely for granted the several times a day we do it. Over the past five months, however, handwashing has taken on a kind of central importance to our daily lives — something to focus on and obsess over.',
    date: new Date(2020, 6, 10, 19, 25),
    comments: 130,
    likes: 24,
    saved: 151,
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80',
    author: 'Jane McKenzie',
  };

  quote = {
    text: 'Unlike other rush initiatives undertaken by the company once the virus hit, however, the forthcoming Apple Watch handwashing app wasn’t built overnight. ',
    author: 'John Smith',
    from: 'The daily Buggle'
  };

  comments = [
    {
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      author: 'Jane Smith',
      date: new Date(2020, 6, 10, 19, 25),
      comment: 'Great article hope it ready asap',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      author: 'Andy Vazquez',
      date: new Date(2020, 6, 10, 19, 20),
      comment: 'The product was a result of years of trial and error, according to the executive.',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1554384645-13eab165c24b?ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
      author: 'Joan Rodriguez',
      date: new Date(2020, 6, 10, 19, 15),
      comment: 'Unlike other rush initiatives undertaken by the company once the virus hit.',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
