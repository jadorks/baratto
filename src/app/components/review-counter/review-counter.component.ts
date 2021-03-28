import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-counter',
  templateUrl: './review-counter.component.html',
  styleUrls: ['./review-counter.component.scss'],
})
export class ReviewCounterComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {}

}
