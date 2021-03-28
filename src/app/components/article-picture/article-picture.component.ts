import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-picture',
  templateUrl: './article-picture.component.html',
  styleUrls: ['./article-picture.component.scss'],
})
export class ArticlePictureComponent implements OnInit {

  @Input() photo: string;
  @Input() author: string;

  constructor() { }

  ngOnInit() {}

}
