import { CONFIG } from './../core/config/env.config';
import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Store } from 'redux';

import { AppState, appStore } from './../redux/index';
import * as CounterActions from './../redux/counter-action-creators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  users: string[];
  counter: number;

  constructor( @Inject(appStore) private store: Store<AppState>,
    private http: Http) {
    store.subscribe(() => this.readState());
    this.readState();
  }
  ngOnInit() {
    this.http
      .get(CONFIG.API + `/users`)
      .map(response => response.json())
      .subscribe(users => this.users = users);
  }

  incrementCount() {
    this.store.dispatch(CounterActions.increment());
  }

  private readState() {
    let state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
  }
}
