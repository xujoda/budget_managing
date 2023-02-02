import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  login: string = ''
  password: string = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(login:string, password:string): void{
    if (login === 'admin' || password === 'admin'){
      this.router.navigate(['/dashboard'])
    }
    else alert('Wrong password')
  }
}
