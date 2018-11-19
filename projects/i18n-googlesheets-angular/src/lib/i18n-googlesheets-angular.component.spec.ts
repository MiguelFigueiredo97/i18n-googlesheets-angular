import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nGooglesheetsAngularComponent } from './i18n-googlesheets-angular.component';

describe('I18nGooglesheetsAngularComponent', () => {
  let component: I18nGooglesheetsAngularComponent;
  let fixture: ComponentFixture<I18nGooglesheetsAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18nGooglesheetsAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nGooglesheetsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
