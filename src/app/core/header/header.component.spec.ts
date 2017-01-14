import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { TranslateService, TranslateModule } from 'ng2-translate';

import { HeaderComponent } from './header.component';
import { LangsComponent } from './../langs/langs.component';

describe('HeaderComponent', () => {

  let comp: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let injector: Injector;
  let translate: TranslateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        LangsComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);

    comp = fixture.componentInstance; // HeaderComponent test instance
  });

  it('should create header component', async(() => {
      let fixture = TestBed.createComponent(HeaderComponent);
      let header = fixture.debugElement.componentInstance;
      expect(header).toBeTruthy();
  }));

});
