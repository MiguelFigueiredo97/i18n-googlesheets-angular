import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { I18nGooglesheetsAngularService } from './services/i18n-googlesheets-angular.service';
import { I18nGooglesheetsAngularComponent } from './components/i18n-googlesheets-angular.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    I18nGooglesheetsAngularComponent],
    
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [ I18nGooglesheetsAngularService ],
  bootstrap: [I18nGooglesheetsAngularComponent]
})
export class I18nGooglesheetsAngularModule { }
