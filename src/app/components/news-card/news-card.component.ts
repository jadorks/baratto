import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {

  @Input() info: any;
  @Input() color: string;

  constructor() { }

  ngOnInit() {}

}
