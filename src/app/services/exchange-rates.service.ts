import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExchangeRatesResponse } from './payloads/exchange-rates-response';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {

  constructor(private httpClient:HttpClient) { }

  getRates(base: string): Observable<ExchangeRatesResponse>{
    console.log(this.httpClient.get<ExchangeRatesResponse>(`https://api.exchangeratesapi.io/latest?base=${base}`))
    return this.httpClient.get<ExchangeRatesResponse>(`https://api.exchangeratesapi.io/latest?base=${base}`)
  }
}
