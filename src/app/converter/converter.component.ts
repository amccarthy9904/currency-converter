import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from "../services/exchange-rates.service";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  currencies = ['KWD', 'BHD', 'OMR', 'JOD', 'GIP', 'GBP', 'KYD', 'EUR', 'USD', 'CHF', 'BND', 'CAD', 'AUD', 'LYD', 'SGD', 'NZD', 'FJD', 'BRL', 'ILS', 'TRY']
  amount = 1;
  from = 'USD';
  to = 'CAD';
  rates: {[key: string]: number}

  convert(): number{
    return this.amount * this.rates[this.to];
  }

  swap(){
    let temp = this.from
    this.from = this.to
    this.to = temp
    this.loadRates()
  }

  loadRates(){
    this.service.getRates(this.from).subscribe(res => this.rates = res);
    console.log(this.rates)
  }

  getAllCurrencies(): string[]{
    return Object.keys(this.rates)
  }

  constructor(private service: ExchangeRatesService) {

  }

  ngOnInit(): void {
    this.loadRates();
  }

}
