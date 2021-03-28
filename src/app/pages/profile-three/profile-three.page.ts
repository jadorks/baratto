import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-three',
  templateUrl: './profile-three.page.html',
  styleUrls: ['./profile-three.page.scss'],
})
export class ProfileThreePage implements OnInit {

  valueType = 'article';

  articles = [
    {
      title: 'Interview shoe designer John Fluevog on new book',
      date: '20 min ago',
      category: 'Sports',
      color: 'primary'
    },
    {
      title: 'Interview shoe designer John Fluevog on new book',
      date: '30 min ago',
      category: 'Breaking News',
      color: 'secondary'
    },
    {
      title: 'Refrigerated treats can make for a cool event',
      date: '50 min ago',
      category: 'Art and Fashion',
      color: 'tertiary'
    },
    {
      title: 'Refrigerated treats can make for a cool event',
      date: '50 min ago',
      category: 'Art and Fashion',
      color: 'danger'
    }
  ];

  photos = [
    'https://images.unsplash.com/photo-1592486058517-36236ba247c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    'https://images.unsplash.com/photo-1588774069410-84ae30757c8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    'https://images.unsplash.com/photo-1592431698394-e5ed80f2c0a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    'https://images.unsplash.com/photo-1592486058552-8d1dde97d1cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    'https://images.unsplash.com/photo-1592483648228-b35146a4330c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    'https://images.unsplash.com/photo-1592452320159-21d39c1ffd80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    'https://images.unsplash.com/photo-1592431690191-c74f7e004198?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    'https://images.unsplash.com/photo-1587613990444-68fe88ee970a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
  ];

  favorites = [
    {
      image: 'https://images.unsplash.com/photo-1592771404380-467f535c7c4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      text: 'War section the notional night cops reporter',
    },
    {
      image: 'https://images.unsplash.com/photo-1592770108625-15c2d4aa56b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=361&q=80',
      text: 'iPad app information wants to be free',
    },
    {
      image: 'https://images.unsplash.com/photo-1592840331052-16e15c2c6f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      text: 'Lucius Nieman want atomization overcome tabloid',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
