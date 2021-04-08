import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/validators/email.validators';
import { passwordValidator } from 'src/app/validators/password.validator';
import { UserService } from "../../services/user.service";


@Component({
  selector: 'app-login-three',
  templateUrl: './login-three.page.html',
  styleUrls: ['./login-three.page.scss'],
})
export class LoginThreePage implements OnInit {

  loginForm: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  signIn() {
    if (this.loginForm.valid) {
      this.userService.loginUser(this.loginForm.get('username').value, this.loginForm.get('password').value);
      if(this.userService.errors.length){
        alert('Error Logging In');
        return;
      }
      else{
        console.log(this.userService.token);
      }
    } else {
      console.log('invalid');
    }
  }

}
