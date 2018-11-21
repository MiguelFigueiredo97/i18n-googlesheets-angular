import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable()
export class I18nGooglesheetsAngularService {

    apiKey: string;
    googleSpreadSheet: string;
    i18n: any;
    language: string;
    defaultLanguage: string;
    loading : boolean;
    loadingState: any;

    constructor(private http: HttpClient) {
        this.defaultLanguage = "en-EN"
        this.apiKey =   "AIzaSyAMxRSu_RQFiVAUepCj4L9DCqpqud6uXOQ";
        this.googleSpreadSheet = "1bgY07BXAQLcDKBfeBnl0oLuLlx6kTme3qbAwx6R7IC4";
        this.i18n = {};
        this.language = "en-EN";
        this.loading = false;
        this.loadingState = new Subject();
    }
    

    changeLanguage(language: string) {
        if(language == "")
            this.language = this.defaultLanguage;
        else
            this.language = language;
        if(!this.i18n[this.language]) 
            this.getLanguage(this.language); 
    }

    message(code: string) {
        if (this.i18n && this.i18n[this.language] && this.i18n[this.language][code]) {
            return this.i18n[this.language][code];
        }
        else return null;
    }

    setKey(apiKey: string) {
        this.apiKey = apiKey;
        this.getLanguage(this.language);
    }

    setSheet(spreadSheet: string) {
        this.googleSpreadSheet = spreadSheet;
        this.getLanguage(this.language);
    }

    getLanguage(language: string) {
        let url = 'https://sheets.googleapis.com/v4/spreadsheets/' + this.googleSpreadSheet + '/values/' + language + '?key=' + this.apiKey;
        this.http.get(url).subscribe(data => {
            this.loading = true;
            this.loadingState.next(this.loading);
            let response = <any>data;
            console.log(response);

            for (let codeMessage of response.values) {
                if (!this.i18n[language]) {
                    this.i18n[language] = {};
                }
                this.i18n[language][codeMessage[0]] = codeMessage[1];
            }
            this.loading = false;
            this.loadingState.next(this.loading);
        })
       
    }

}