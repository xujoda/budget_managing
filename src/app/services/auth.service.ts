import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn: boolean

  constructor(private router: Router, private fbAuth: AngularFireAuth) {
    this.userLoggedIn = false
    this.fbAuth.onAuthStateChanged((user) => {
      if (user){
        this.userLoggedIn = true
      }
      else 
        this.userLoggedIn = false
    })
   }

   loginUser(email:string, password:string): Promise<any>{
    return this.fbAuth.signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Auth Service: loginUser: success')
    })
    .catch(error => {
      console.log('Auth Service: loginUser: login error...')
      console.log('error code: ', error.code)
      console.log('error: ', error)
      if (error.code)
      return {isValid:false, message: error.message}
      return ''
    })
   }

}
