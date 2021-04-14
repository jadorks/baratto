import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, from, Subject } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';

import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;
const TOKEN_KEY = 'token'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  baseUrl: string = "http://127.0.0.1:8000";
  token = '';

  constructor(private httpClient: HttpClient) { 
    this.loadToken();
  }

  async loadToken(){
    const token = await Storage.get({ key: TOKEN_KEY });
    if( token && token.value ){
      console.log('set token: ', token.value);
      this.token = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  public loginUser(username: string, password: string){
    let user = {
      "username": username,
      "password": password
    }
    return this.httpClient.post(this.baseUrl + '/rest-auth/login/', user).pipe(
      map((data: any) => data.key),
      switchMap(key => {
        return from(Storage.set({key: TOKEN_KEY, value: key}));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }

  public registerUser(username: string, email: string, password: string, password2: string){
    let user = {
      "username": username,
      "email": email,
      "password1": password,
      "password2": password2
    };


    return this.httpClient.post(this.baseUrl + '/rest-auth/registration/', user).pipe(
      map((data: any) => data.key),
      switchMap(key => {
        return from(Storage.set({key: TOKEN_KEY, value: key}));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )

  }

  public forgotPass(email: string){
    let user = {
      "email": email
    };

    return this.httpClient.post(this.baseUrl + '/rest-auth/password/reset/', user)
    .subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      }
    )
  }

  public logout(): Promise<void>{
    this.isAuthenticated.next(false);
    return Storage.remove({key: TOKEN_KEY});
  }

  public resetPass(){

  }

  public getOtherUser(){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Token ' + this.token,
      }),
    };

      return this.httpClient.get(this.baseUrl + '/api/products/users/', httpOptions).pipe(
        map((data: any) => {
          return new User(data);
        })
      )
  }

  public getProfile(){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Token ' + this.token,
      }),
    };

    return this.httpClient.get(this.baseUrl + '/api/products/users/', httpOptions).pipe(
      map((data: any) => {
        return new User(data);
      })
    )
  }
}

export class User{
  id: any;
  username: any;
  products: any;
  email: any;

  constructor( values: Object = {} ){
    Object.assign(this, values);
  }
}
