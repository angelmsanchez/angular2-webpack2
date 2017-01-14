import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { TranslateService, TranslateModule } from 'ng2-translate';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NoContentComponent } from './no-content/no-content.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let injector: Injector;
  let translate: TranslateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, 
        NoContentComponent
      ],
      imports: [
        CoreModule,
        SharedModule,
        TranslateModule.forRoot(),
        AppRoutingModule
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }
      ],
    });

    injector = getTestBed();
    translate = injector.get(TranslateService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);

    comp = fixture.componentInstance; // AppComponent test instance
  });

  it('should create the app component', async(() => {
      let fixture = TestBed.createComponent(AppComponent);
      let app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
  }));

});
