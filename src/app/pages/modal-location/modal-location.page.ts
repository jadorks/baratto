import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-location',
  templateUrl: './modal-location.page.html',
  styleUrls: ['./modal-location.page.scss'],
})
export class ModalLocationPage implements OnInit {

  @Input() info: any;

  constructor(private modal: ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modal.dismiss();
  }

}
