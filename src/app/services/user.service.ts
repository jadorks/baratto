import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://127.0.0.1:8000"
  errors=[]
  token:any;

  constructor(private httpClient: HttpClient) { }

  public loginUser(username: string, password: string){
    let user = {
      "username": username,
      "password": password
    }
    return this.httpClient.post(this.baseUrl + '/rest-auth/login/', user)
    .subscribe(
      data => {
        if(this.errors.length){
          this.errors = [];
        }
        this.token=data;
      }, error => {
        this.errors.push(error);
      }
    );
  }

  public registerUser(username: string, email: string, password: string, password2: string){
    let user = {
      "username": username,
      "email": email,
      "password1": password,
      "password2": password2
    };

    return this.httpClient.post(this.baseUrl + '/rest-auth/registration/', user)
    .subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      }
    )

  }

  public forgotPass(){

  }

  public resetPass(){

  }
}
