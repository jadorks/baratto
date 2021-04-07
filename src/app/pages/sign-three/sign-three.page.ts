import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { emailValidator } from 'src/app/validators/email.validators';
import { passwordValidator } from 'src/app/validators/password.validator';

@Component({
  selector: 'app-sign-three',
  templateUrl: './sign-three.page.html',
  styleUrls: ['./sign-three.page.scss'],
})
export class SignThreePage implements OnInit {

  signForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, emailValidator]),
      'password': new FormControl(null, [Validators.required, passwordValidator]),
      'password_confirm': new FormControl(null, [Validators.required])
    }, this.passwordMatch);
  }

  signIn() {
    if (this.signForm.valid) {
      console.log(this.signForm.value);
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
