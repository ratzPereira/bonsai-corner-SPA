import { isLoggedInSelector, isAnonymousSelector, currentUserSelector } from './../../../../auth/store/selectors';
import { CurrentUserInterface } from './../../../types/currentUser.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
@Component({
    selector: 'bc-topbar',
    templateUrl: './topbar.component.html',
  })
  export class TopbarComponent implements OnInit{

    isLoggedIn$ : Observable<boolean>
    isAnonymous$ : Observable<boolean>
    currentUser$: Observable<CurrentUserInterface | null>

    constructor(private readonly store: Store){}

    ngOnInit(): void {
      this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
      this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
      this.currentUser$ = this.store.pipe(select(currentUserSelector))
    }
  }