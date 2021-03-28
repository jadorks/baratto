import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { emailValidator } from 'src/app/validators/email.validators';
import { passwordValidator } from 'src/app/validators/password.validator';

@Component({
  selector: 'app-sign-one',
  templateUrl: './sign-one.page.html',
  styleUrls: ['./sign-one.page.scss'],
})
export class SignOnePage implements OnInit {

  signForm: FormGroup;

  background = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1579033462043-0f11a7862f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80)'
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signForm = this.formBuilder.group({
      fullName: [null, [Validators.required]],
      mobile: [null, [Validators.required]],
      email: [null, [Validators.required, emailValidator]],
      password: [null, [Validators.required, passwordValidator]],
    });
  }

  signUp() {
    if (this.signForm.valid) {
      // do something
    } else {
      // do something
    }
  }


}
