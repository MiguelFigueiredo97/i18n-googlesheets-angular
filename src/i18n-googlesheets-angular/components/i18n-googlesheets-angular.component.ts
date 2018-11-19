import { Component, OnInit } from '@angular/core';
import {I18nGooglesheetsAngularService } from "../services/i18n-googlesheets-angular.service";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-i18nGooglesheetsAngular',
  templateUrl: './i18n-googlesheets-angular.component.html',
  styleUrls: ['./i18n-googlesheets-angular.component.css']
})
export class I18nGooglesheetsAngularComponent  implements OnInit {
  title = 'i18nGooglesheetsAngular';

  constructor(private i18nAngular: I18nGooglesheetsAngularService) { 
  }

  ngOnInit(){
    this.i18nAngular.getLanguage("en-EN");
  }

  onAddedKey(form: NgForm) {
    let apiKey = form.value.apiKey;
    this.i18nAngular.setKey(apiKey);
  }

  onAddedSheet(form: NgForm) {
    let spreadSheet = form.value.spreadSheet;
    this.i18nAngular.setSheet(spreadSheet);
  }

  onChangedLanguage(form: NgForm) {
    let language = form.value.language;
    this.i18nAngular.changeLanguage(language);
  }

  message(code: string) {
      return this.i18nAngular.message(code);
  }
}
