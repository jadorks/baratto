import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-item-one',
  templateUrl: './article-item-one.component.html',
  styleUrls: ['./article-item-one.component.scss'],
})
export class ArticleItemOneComponent implements OnInit {

  @Input() image: string;
  @Input() title: string;
  @Input() likes: number;
  @Input() saved: number;


  constructor() { }

  ngOnInit() {}

}
