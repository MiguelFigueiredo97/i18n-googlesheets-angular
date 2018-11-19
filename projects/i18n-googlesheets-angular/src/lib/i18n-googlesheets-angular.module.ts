import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { I18nGooglesheetsAngularComponent } from './i18n-googlesheets-angular.component';
import { FormsModule } from '@angular/forms';
import { I18nGooglesheetsAngularService } from './i18n-googlesheets-angular.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [I18nGooglesheetsAngularComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [I18nGooglesheetsAngularService],
  bootstrap: [I18nGooglesheetsAngularComponent]
})
export class I18nGooglesheetsAngularModule { }
