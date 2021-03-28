import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed-card-one',
  templateUrl: './feed-card-one.component.html',
  styleUrls: ['./feed-card-one.component.scss'],
})
export class FeedCardOneComponent implements OnInit {

  @Input() avatar: string;
  @Input() name: string;
  @Input() date: string;
  @Input() text: string;
  @Input() image: string;
  @Input() likes: number;
  @Input() comments: number;
  @Input() separator: boolean;

  constructor() { }

  ngOnInit() {}

}
