import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed-card-two',
  templateUrl: './feed-card-two.component.html',
  styleUrls: ['./feed-card-two.component.scss'],
})
export class FeedCardTwoComponent implements OnInit {

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
