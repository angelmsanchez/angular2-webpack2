import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

if ('production' === ENV) {
  enableProdMode();
}

console.log('Load app main.jit.ts');
platformBrowserDynamic().bootstrapModule(AppModule);
