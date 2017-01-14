/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { TranslateService, TranslateModule } from 'ng2-translate';

import { HomeComponent } from './home.component';
import { SharedModule } from './../shared/shared.module';

describe('HomeComponent', () => {
  let comp: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let injector: Injector;
  let translate: TranslateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ]
    });

    injector = getTestBed();
  }));

   beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);

    comp = fixture.componentInstance; // HomeComponent test instance
  });

  xit('should create the home component', async(() => {
      let fixture = TestBed.createComponent(HomeComponent);
      let home = fixture.debugElement.componentInstance;
      expect(home).toBeTruthy();
  }));

});
