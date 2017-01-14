import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-langs',
  templateUrl: 'langs.component.html'
})

export class LangsComponent {

  constructor(private translateService: TranslateService) {
  }

  changeLang(lang: string) {
    this.translateService.use(lang);
  }
}
