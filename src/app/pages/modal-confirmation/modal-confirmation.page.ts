import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.page.html',
  styleUrls: ['./modal-confirmation.page.scss'],
})
export class ModalConfirmationPage implements OnInit {

  @Input() info: any;

  constructor(private modal: ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modal.dismiss();
  }

}
