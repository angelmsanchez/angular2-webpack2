import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { TranslateService, TranslateModule } from 'ng2-translate';

import { LangsComponent } from './langs.component';

describe('LangsComponent', () => {

  let comp: LangsComponent;
  let fixture: ComponentFixture<LangsComponent>;
  let injector: Injector;
  let translate: TranslateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LangsComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangsComponent);

    comp = fixture.componentInstance; // LangsComponent test instance
  });

  it('should create langs component', async(() => {
      let fixture = TestBed.createComponent(LangsComponent);
      let langs = fixture.debugElement.componentInstance;
      expect(langs).toBeTruthy();
  }));

  it('should change language', async(() => {
      
  }));

});
