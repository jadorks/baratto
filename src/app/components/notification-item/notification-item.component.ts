import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
})
export class NotificationItemComponent implements OnInit {

  @Input() avatar: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() date: string;

  constructor() { }

  ngOnInit() {}

}
