import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment.component.html',
  styleUrls: ['./article-comment.component.scss'],
})
export class ArticleCommentComponent implements OnInit {

  @Input() avatar: string;
  @Input() author: string;
  @Input() date: string;
  @Input() comment: string;  

  constructor() { }

  ngOnInit() {}

}
