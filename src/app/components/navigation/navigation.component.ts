import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs'
import { Observer } from '@firebase/util';

interface PageData {
  title: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit{

  isMenuOpen: boolean = false;
  isRuLanguage: boolean = false;
  pageTitle: string = "";

  observer: Partial<Observer<PageData>> = {};

  constructor(public fbAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.router.routerState.root),
        map((root) => {
          while (root.firstChild) {
            root = root.firstChild;
          }
          return root;
        }),
        filter((route) => route.outlet === 'primary'),
        map((route) => route.snapshot.data['title'])
      )
      .subscribe((title) => {
        this.pageTitle = title;
      });
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen
  }

  toggleLanguage(){
    this.isRuLanguage = !this.isRuLanguage
  }

  logout(): void{
    this.fbAuth.signOut();
  }
}
