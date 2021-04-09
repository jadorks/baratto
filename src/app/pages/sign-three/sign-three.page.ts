import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { emailValidator } from 'src/app/validators/email.validators';
import { passwordValidator } from 'src/app/validators/password.validator';
import { AlertController, LoadingController } from "@ionic/angular";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-sign-three',
  templateUrl: './sign-three.page.html',
  styleUrls: ['./sign-three.page.scss'],
})
export class SignThreePage implements OnInit {

  signForm: FormGroup;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private alertController: AlertController,
              private loadingController: LoadingController,
              private router: Router
  ) { }

  ngOnInit() {
    this.signForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, emailValidator]),
      'password': new FormControl(null, [Validators.required, passwordValidator]),
      'password_confirm': new FormControl(null, [Validators.required])
    }, this.passwordMatch);
  }

  async register(){
    const loading = await this.loadingController.create();
    await loading.present();

    this.userService.registerUser(this.signForm.get('username').value, this.signForm.get('email').value, this.signForm.get('password').value, this.signForm.get('password_confirm').value).subscribe(
      async (res) => {
        await loading.dismiss();

        const alert = await this.alertController.create({
          header: 'Registration Successful',
          message: 'Welcome to Baratto. Please login to access the shop',
          buttons: ['OK'],
        });

        await alert.present();
        
        this.router.navigateByUrl('/login');
      },
      async (res) => {
        await loading.dismiss();
        // show all values in the error object...map
        const alert = await this.alertController.create({
          header: 'Registration failed',
          message: 'Failed to create account',
          buttons: ['OK'],
        });

        await alert.present();

      }
    )
  }


  signIn() {
    if (this.signForm.valid) {
      this.userService.registerUser(this.signForm.get('username').value, this.signForm.get('email').value, this.signForm.get('password').value, this.signForm.get('password_confirm').value)
    } else {
      console.log('invalid');
    }
  }

  passwordMatch(frm: FormGroup): { invalid: boolean } {
    if (frm.get('password').value !== frm.get('password_confirm').value){
      return {invalid: true};
    }
  }

}
