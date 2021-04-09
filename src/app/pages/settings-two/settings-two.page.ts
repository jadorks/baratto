import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-settings-two',
  templateUrl: './settings-two.page.html',
  styleUrls: ['./settings-two.page.scss'],
})
export class SettingsTwoPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController, private userService: UserService) { }

  ngOnInit() {
  }

  async logout() {
    await this.userService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

}
