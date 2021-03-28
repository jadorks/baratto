import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-quote',
  templateUrl: './article-quote.component.html',
  styleUrls: ['./article-quote.component.scss'],
})
export class ArticleQuoteComponent implements OnInit {

  @Input() text: string;
  @Input() author: string;
  @Input() from: string;

  constructor() { }

  ngOnInit() {}

}
