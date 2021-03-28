import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-news-card-item',
  templateUrl: './news-card-item.component.html',
  styleUrls: ['./news-card-item.component.scss'],
})
export class NewsCardItemComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {}

}
