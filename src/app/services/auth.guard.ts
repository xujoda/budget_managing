import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private fbAuth: Auth) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      this.fbAuth.onAuthStateChanged((user) => {
        if (user) {
          resolve(true)
        }
        else{
          console.log('Auth Guard: user is not logged in')
          this.router.navigate(['/home'])
          resolve(false)
        }
      })
    })
  } 
}
