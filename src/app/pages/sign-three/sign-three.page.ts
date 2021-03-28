import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    this.signForm = this.formBuilder.group({
      fullName: [null, [Validators.required]],
      email: [null, [Validators.required, emailValidator]],
      password: [null, [Validators.required, passwordValidator]],
    });
  }

  signIn() {
    if (this.signForm.valid) {
      console.log(this.signForm.value);
    } else {
      console.log('invalid');
    }
  }
}
