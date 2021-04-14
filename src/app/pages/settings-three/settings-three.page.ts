import { Component, OnInit } from '@angular/core';
import { User, UserService } from "../../services/user.service";

@Component({
  selector: 'app-settings-three',
  templateUrl: './settings-three.page.html',
  styleUrls: ['./settings-three.page.scss'],
})
export class SettingsThreePage implements OnInit {

  user: any = {};

  menu = [
    {
      icon: 'cart-outline',
      title: 'My Items',
      subtitle: 'View your items',
    },
    {
      icon: 'cash-outline',
      title: 'Transactions',
      subtitle: 'View incoming/ outgoing transactions',
    },
    {
      icon: 'send-outline',
      title: 'Messages',
      subtitle: 'Chat with other users',
    },
    {
      icon: 'settings-outline',
      title: 'Settings',
      subtitle: 'Customize your app experience',
    },
  ];

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.userService.getProfile().subscribe(
      result => {
        this.user = result;
        console.log(this.user);
      });
  }

}
