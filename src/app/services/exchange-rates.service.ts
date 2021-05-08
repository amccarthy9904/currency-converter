import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExchangeRatesResponse } from './payloads/exchange-rates-response';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {

  result:any
  constructor(private httpClient:HttpClient) { }

  getRates(base: string): Observable<ExchangeRatesResponse>{
    //please dont take my api key
    return this.httpClient.get<ExchangeRatesResponse>(`https://min-api.cryptocompare.com/data/price?fsym=${base}&tsyms=KWD,BHD,OMR,JOD,GIP,GBP,KYD,EUR,USD,CHF,BND,CAD,AUD,LYD,SGD,NZD,FJD,BRL,ILS,TRY&api_key={98692e6bab4fc612eb16c39b9819d00ac3b5163254f5577fa8be634da2937a3c}`)
  }
}
