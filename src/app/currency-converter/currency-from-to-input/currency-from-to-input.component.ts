import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { CurrencyConverterApiService } from 'src/app/core/api/services/currency-converter-api.service';
import { ICurrencyLatest } from 'src/app/core/models/currency-converter.model';
import { CurrencyStateService } from 'src/app/shared/services/currency-state.service';
import { SimilarCurrencyService } from 'src/app/shared/services/similar-currency.service';

@Component({
  selector: 'app-currency-from-to-input',
  templateUrl: './currency-from-to-input.component.html',
  styleUrls: ['./currency-from-to-input.component.css'],
})
export class CurrencyFromToInputComponent implements OnInit {
  selectedFromCurrency: string = 'EUR';
  selectedToCurrency: string = 'USD';
  convertedAmount: number | undefined;
  errorExist: boolean = false;
  errorMsg: string = '';
  currencyList: string[] = ['EUR, USD, GBP'];
  detailsView: boolean = false;
  selectedRoute: string = '';
  similarCurrencies: string[] = ['GIP', 'CAD', 'AUD', 'CHF', 'JOD', 'OMR', 'BHD', 'KYD', 'AMD'];
  currencyName: string = '';

  @Input() selectedAmount: number | undefined;
  @Output() currentCurrencyInfo = new EventEmitter();

  constructor(
    private currencyConvertService: CurrencyConverterApiService,
    private currencySharedService: CurrencyStateService,
    private router: Router,
    private similarCurrenciesList: SimilarCurrencyService
  ) {}

  ngOnInit(): void {
    if (this.router.url.indexOf('eur-gbp') > 0) {
      this.selectedToCurrency = 'GBP';
    }
    if (this.router.url.indexOf('eur-usd') > 0) {
      this.selectedToCurrency = 'USD';
    }
    this.currencySharedService.setFromCurrencySubject(this.selectedFromCurrency);
    this.getCurrenciesDetails();
  }

  convertAmount(): void {
    this.errorExist = false;
    this.errorMsg = '';

    if (this.selectedAmount! <= 0 || this.selectedFromCurrency === this.selectedToCurrency) {
      if (this.selectedAmount! <= 0) {
        this.errorExist = true;
        this.errorMsg = 'amount must be greater than equals to 1';
      } else {
        this.errorExist = true;
        this.errorMsg = 'From and To can not be same';
      }
    } else {
      this.errorExist = false;
      this.errorMsg = '';
      this.getCurrenciesDetails();
      this.getRelatedCurrencies();
    }
  }

  swapExchangeValues(): void {
    const fromValue = this.selectedFromCurrency;
    this.selectedFromCurrency = this.selectedToCurrency;
    this.selectedToCurrency = fromValue;

    this.currencySharedService.setFromCurrencySubject(this.selectedFromCurrency);
  }

  selectValueChanged(): void {
    this.errorExist = false;
  }

  getCurrenciesDetails(): void {
    this.currencyConvertService
      .getCurrencyDetailsForConversion(this.selectedFromCurrency, this.selectedToCurrency, this.selectedAmount!)
      .subscribe((res: ICurrencyLatest) => {
        this.convertedAmount = res.result;
        this.currentCurrencyInfo.emit({
          resp: res,
          selectedFromCurrency: this.selectedFromCurrency,
          selectedToCurrency: this.selectedToCurrency,
        });
      });
  }

  showMoreDetails(): void {
    this.detailsView = !this.detailsView;

    this.currencyConvertService.getCurrenciestList().subscribe((res: any) => {
      if (res.symbols[this.selectedFromCurrency] !== undefined && this.detailsView) {
        this.currencySharedService.setCurrencyName(res.symbols[this.selectedFromCurrency]);
      } else {
        if (this.detailsView) {
          this.currencySharedService.setCurrencyName(this.selectedFromCurrency);
        } else {
          this.currencySharedService.setCurrencyName('');
        }
      }
    });
  }

  getRelatedCurrencies(): void {
    this.similarCurrencies.forEach((currencycode: string) => {
      this.currencyConvertService
        .getCurrencyDetailsForConversion(currencycode, this.selectedToCurrency, this.selectedAmount!)
        .subscribe((res: ICurrencyLatest) => {
          this.similarCurrenciesList.setSimilarCurrencies(res);
        });
    });
  }
}
