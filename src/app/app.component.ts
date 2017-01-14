import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'a2-w2',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.configLang();
  }

  private configLang() {
    this.translateService.setDefaultLang('es');
    this.translateService.use('es');
  }
}
