import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {BaseService} from "../../core/base.service";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService extends BaseService{
    baseExhangeRatesUrl: String = "https://api.exchangeratesapi.io/latest";
    constructor(http: HttpClient,
                router: Router) {
        super(http, router);
    }

    getExhangesRate() {
        return this.getAPI(`${this.baseExhangeRatesUrl}?symbols=USD,IDR`, true);
    }
}
