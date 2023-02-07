import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-authorization',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  firebaseErrorMessage: string

  constructor(private router: Router, private authService: AuthService, private fbAuth: AngularFireAuth) { 
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
    })

    this.firebaseErrorMessage = ''
  }

  ngOnInit(): void {
  }

  loginUser(){
    console.log('loginUser')
    if (this.loginForm.invalid)
      return

    this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).
    then((result => {
      if (result === null){
        console.log('loggin in...')
        this.router.navigate(['/dashboard'])
      }
      else if (result.isValid == false){
        console.log('loggin error: ', result)
        this.firebaseErrorMessage = result.message
      }
    }))
  }
}
