import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-one',
  templateUrl: './article-one.page.html',
  styleUrls: ['./article-one.page.scss'],
})
export class ArticleOnePage implements OnInit {

  background = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80)'
  };

  article = {
    category: 'Technology',
    title: 'Cash App eclipsed Venmo during the pandemic',
    short: 'Since the coronavirus pandemic hit in the United States earlier this year, a surprising trend has emerged.',
    date: new Date(2020, 6, 10, 19, 25),
    comments: 130
  };

  constructor() { }

  ngOnInit() {
  }

}
