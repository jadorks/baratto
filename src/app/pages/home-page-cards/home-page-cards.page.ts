import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-cards',
  templateUrl: './home-page-cards.page.html',
  styleUrls: ['./home-page-cards.page.scss'],
})
export class HomePageCardsPage implements OnInit {

  news = [
    {
      author: {
        name: 'Marta Ronsom',
        photo: 'https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
      },
      date: new Date(2020, 9, 20),
      title: 'PayPal to let you buy and sell cryptocurrencies in the US',
      subtitle: 'PayPal has partnered with cryptocurrency company Paxos to launch a new service. PayPal users in the U.S. will soon be able to buy, hold and sell cryptocurrencies.',
      likes: 123,
      saved: 245,
      color: 'blue'
    },
    {
      author: {
        name: 'Mike Gilligan',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
      },
      date: new Date(2020, 9, 21),
      title: 'How Yext reinvented itself on its way to going public',
      subtitle: 'Yext, which focuses on business information, went public in 2017, making it one of the first companies to demo at a TechCrunch event and eventually list.',
      likes: 154,
      saved: 1800,
      color: 'red'
    },
    {
      author: {
        name: 'Vince McDonald',
        photo: 'https://images.unsplash.com/photo-1546672741-d327539d5f13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
      },
      date: new Date(2020, 9, 24),
      title: 'Founders don’t need to be full-time to start raising capital',
      subtitle: 'The fund, which closed a $400 million investment vehicle in November 2019, has noticed that more and more startup employees are thinking about.',
      likes: 60,
      saved: 27,
      color: 'magenta'
    }
  ];

  withImages = [
    {
      image: 'https://images.unsplash.com/photo-1547546801-9edb40f6f80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      category: 'Market',
      title: 'News from Market'
    },
    {
      image: 'https://images.unsplash.com/photo-1547496832-84e64458210a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      category: 'Finance',
      title: 'Finance Trades this week'
    }
  ];

  moreImages = {
    images: [
      'https://images.unsplash.com/photo-1547634678-181c1103b6ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80',
      'https://images.unsplash.com/photo-1547979854-5333256878de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjg3OTd9&auto=format&fit=crop&w=1055&q=80',
      'https://images.unsplash.com/photo-1548164806-9709e698bfc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1902&q=80'
    ],
    title: 'Trending',
    subtitle: 'Most viewed this week',
    tags: ['#pics', '#nature', '#trending', '#landscape']
  };

  slideConfig = {
    slidesPerView: 1,
    centeredSlides: true
  };

  constructor() { }

  ngOnInit() {

  }

}
