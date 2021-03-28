import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-subscribe',
  templateUrl: './modal-subscribe.page.html',
  styleUrls: ['./modal-subscribe.page.scss'],
})
export class ModalSubscribePage implements OnInit {

  @Input() info: any;

  constructor(private modal: ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modal.dismiss();
  }
}
