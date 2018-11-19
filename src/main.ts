import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { I18nGooglesheetsAngularModule } from './i18n-googlesheets-angular/i18n-googlesheets-angular.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(I18nGooglesheetsAngularModule)
  .catch(err => console.error(err));
