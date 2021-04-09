import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from "rxjs/operators";
import { UserService } from "../services/user.service";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanLoad {

  constructor(private router: Router, private userService: UserService) {}

  canLoad(): Observable<boolean> {
    return this.userService.isAuthenticated.pipe(
      filter(val => val != null),
      take(1),
      map(isAuthenticated => {
        if(isAuthenticated){
          console.log('auth');
          return true;
        } else {
          console.log('not');
          this.router.navigateByUrl('/login');
          return false;
        }
      })
    );
  }
}
