import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-article',
  templateUrl: './modal-article.page.html',
  styleUrls: ['./modal-article.page.scss'],
})
export class ModalArticlePage implements OnInit {

  @Input() info: any;

  constructor(private modal: ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modal.dismiss();
  }

}
