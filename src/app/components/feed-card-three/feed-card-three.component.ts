import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed-card-three',
  templateUrl: './feed-card-three.component.html',
  styleUrls: ['./feed-card-three.component.scss'],
})
export class FeedCardThreeComponent implements OnInit {

  @Input() avatar: string;
  @Input() avatars: any[];
  @Input() name: string;
  @Input() date: string;
  @Input() text: string;
  @Input() image: string;
  @Input() likes: number;
  @Input() separator: boolean;

  constructor() { }

  ngOnInit() {}

}
