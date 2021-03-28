import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-blog-card',
  templateUrl: './small-blog-card.component.html',
  styleUrls: ['./small-blog-card.component.scss'],
})
export class SmallBlogCardComponent implements OnInit {

  @Input() category: string;
  @Input() text: string;
  @Input() date: string;
  @Input() color: string;

  constructor() { }

  ngOnInit() {}

}
