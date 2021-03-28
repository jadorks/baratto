import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-group-item',
  templateUrl: './news-group-item.component.html',
  styleUrls: ['./news-group-item.component.scss'],
})
export class NewsGroupItemComponent implements OnInit {

  @Input() info: any;

  constructor() { }

  ngOnInit() {}

}
