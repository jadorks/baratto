import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-one',
  templateUrl: './feed-one.page.html',
  styleUrls: ['./feed-one.page.scss'],
})
export class FeedOnePage implements OnInit {

  articles = [
    {
      image: 'https://images.unsplash.com/photo-1490535004195-099bc723fa1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
      title: 'Interview shoe designer John Fluevog on new book',
      text: 'Aliso Canyon leak prompts feds to recommend dozens of safety changes',
      likes: 120,
      saved: 405,
      date: new Date(2020, 6, 10),
      category: 'Sports'
    },
    {
      image: 'https://images.unsplash.com/photo-1498842812179-c81beecf902c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
      title: 'Interview shoe designer John Fluevog on new book',
      text: 'Aliso Canyon leak prompts feds to recommend dozens of safety changes',
      likes: 320,
      saved: 4125,
      date: new Date(2020, 6, 9),
      category: 'Breaking News'
    },
    {
      image: 'https://images.unsplash.com/photo-1519575706483-221027bfbb31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
      title: 'Refrigerated treats can make for a cool event',
      text: 'Aliso Canyon leak prompts feds to recommend dozens of safety changes',
      likes: 290,
      saved: 945,
      date: new Date(2020, 6, 8),
      category: 'Art and Fashion'
    }
  ];

  feeds = [
    {
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80',
      name: 'Christine Jones',
      date: new Date(2020, 6, 2),
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
      date: new Date(2020, 6, 1),
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
