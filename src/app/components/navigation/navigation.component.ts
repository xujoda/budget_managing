import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(public fbAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  logout(): void{
    console.log('User: Sign out')
    this.fbAuth.signOut();
  }
}
