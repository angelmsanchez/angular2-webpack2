import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { createStore, Store, StoreEnhancer } from 'redux';

import { CoreModule } from './core/core.module';
import { ENV_PROVIDERS } from './core/environment';
import { AppComponent } from './app.component';
import { NoContentComponent } from './no-content';
import { AppRoutingModule } from './app-routing.module';
import { TranslateModule } from 'ng2-translate';

import { AppState } from './redux/app-state';
import { appStore } from './redux/app-store';
import { counterReducer } from './redux/counter-reducer';

let devtools: StoreEnhancer<AppState> = window['devToolsExtension'] ? window['devToolsExtension']() : f => f;

let reduxStore: Store<AppState> = createStore<AppState>(
  counterReducer,
  devtools
);

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
    AppRoutingModule,
    CoreModule
  ],
  declarations: [
    AppComponent,
    NoContentComponent
  ],
  exports: [],
  providers: [
    {
      provide: appStore,
      useValue: reduxStore
    }
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
  constructor() { }
}
