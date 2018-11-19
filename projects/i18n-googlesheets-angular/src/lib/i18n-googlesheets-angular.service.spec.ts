import { TestBed } from '@angular/core/testing';

import { I18nGooglesheetsAngularService } from './i18n-googlesheets-angular.service';

describe('I18nGooglesheetsAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: I18nGooglesheetsAngularService = TestBed.get(I18nGooglesheetsAngularService);
    expect(service).toBeTruthy();
  });
});
