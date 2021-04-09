import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { emailValidator } from 'src/app/validators/email.validators';
import { passwordValidator } from 'src/app/validators/password.validator';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
})
export class ForgotPassPage implements OnInit {

  resetForm: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.resetForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, emailValidator]),
    })
  }

  resetPass(){
    if(this.resetForm.valid){
      console.log(this.resetForm.value);
      this.userService.forgotPass(this.resetForm.get('email').value);
    }else{
      console.log('Error');
    }
  }

}
