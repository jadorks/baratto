import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-two',
  templateUrl: './feed-two.page.html',
  styleUrls: ['./feed-two.page.scss'],
})
export class FeedTwoPage implements OnInit {

  feeds = [
    {
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80',
      name: 'Christine Jones',
      date: new Date(2020, 6, 10, 12, 30),
      image: 'https://images.unsplash.com/photo-1538384823779-80c3e445d1a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
      likes: 2310,
      comments: 450,
      avatars: [
        { image: 'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80'},
        { image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80'},
        { image: 'https://images.unsplash.com/photo-1578489758854-f134a358f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80'}
      ]
    },
    {
      avatar: 'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80',
      name: 'Guy Russell',
      date: new Date(2020, 6, 10),
      text: 'Interview: Shoe Designer John Fluevog On New Book, Spirituality And ‘Slow Fashion’',
      image: 'https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
      likes: 2310,
      comments: 450,
      avatars: [
        { image: 'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80'},
        { image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80'},
        { image: 'https://images.unsplash.com/photo-1578489758854-f134a358f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80'}
      ]
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
