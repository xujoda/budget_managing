import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string = ''
  password: string = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(login:string, password:string): void{
  //   this.authSerive

  //   if (login === 'admin' || password === 'admin'){
  //     this.router.navigate(['/dashboard'])
  //   }
  //   else alert('Wrong password')
  }
}
