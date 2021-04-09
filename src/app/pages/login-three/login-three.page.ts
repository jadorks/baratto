import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/validators/email.validators';
import { passwordValidator } from 'src/app/validators/password.validator';
import { AlertController, LoadingController } from "@ionic/angular";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";


@Component({
  selector: 'app-login-three',
  templateUrl: './login-three.page.html',
  styleUrls: ['./login-three.page.scss'],
})
export class LoginThreePage implements OnInit {

  loginForm: FormGroup;

  constructor(private alertController: AlertController, 
              private userService: UserService, 
              private formBuilder: FormBuilder,
              private router: Router,
              private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.userService.loginUser(this.username.value, this.password.value).subscribe(
      async (res) => {
        await loading.dismiss();
        this.router.navigateByUrl('/tabs/home', { replaceUrl: true });
      },
      async (res) => {
        await loading.dismiss();
        
        const alert = await this.alertController.create({
          header: 'Login failed',
          message: JSON.parse(JSON.stringify(res.error)).non_field_errors,
          buttons: ['OK'],
        });

        await alert.present();
      }
    );
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
