import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-item-two',
  templateUrl: './article-item-two.component.html',
  styleUrls: ['./article-item-two.component.scss'],
})
export class ArticleItemTwoComponent implements OnInit {

  @Input() image: string;
  @Input() category: string;
  @Input() text: string;
  @Input() date: string;

  constructor() { }

  ngOnInit() {}

}
