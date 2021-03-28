import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-favorite-news',
  templateUrl: './card-favorite-news.component.html',
  styleUrls: ['./card-favorite-news.component.scss'],
})
export class CardFavoriteNewsComponent implements OnInit {

  @Input() image: string;
  @Input() text: string;
  @Input() color: string;

  constructor() { }

  ngOnInit() {}

}
