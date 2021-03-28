import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-category-news',
  templateUrl: './card-category-news.component.html',
  styleUrls: ['./card-category-news.component.scss'],
})
export class CardCategoryNewsComponent implements OnInit {

  @Input() image: string;
  @Input() title: string;
  @Input() caption: string;
  @Input() color: string;

  constructor() { }

  ngOnInit() {}

}
