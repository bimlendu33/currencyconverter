import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CurrencyConverterApiService } from 'src/app/core/api/services/currency-converter-api.service';
import { ICurrencyLatest } from 'src/app/core/models/currency-converter.model';
import { CurrencyStateService } from 'src/app/shared/services/currency-state.service';

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

  @Input() selectedAmount: number | undefined;
  @Output() currentCurrencyInfo = new EventEmitter();

  constructor(
    private currencyConvertService: CurrencyConverterApiService,
    private currencySharedService: CurrencyStateService
  ) {}

  ngOnInit(): void {
    this.getCurrencyDetails();
    this.currencySharedService.setFromCurrencySubject(this.selectedFromCurrency);
    this.currencySharedService.setToCurrencySubject(this.selectedToCurrency);
  }

  convertAmount(): void {
    this.errorExist = false;
    this.errorMsg = '';

    this.currencySharedService.getSelectedAmountValue().subscribe((res) => {
      if (res <= 0 || this.selectedFromCurrency === this.selectedToCurrency) {
        if (res <= 0) {
          this.errorExist = true;
          this.errorMsg = 'amount must be greater than equals to 1';
        } else {
          this.errorExist = true;
          this.errorMsg = 'From and To can not be same';
        }
      } else {
        this.errorExist = false;
        this.errorMsg = '';
        this.getCurrencyDetails();
      }
    });
  }

  swapExchangeValues(): void {
    const fromValue = this.selectedFromCurrency;
    this.selectedFromCurrency = this.selectedToCurrency;
    this.selectedToCurrency = fromValue;
  }

  selectValueChanged(): void {
    this.currencySharedService.setFromCurrencySubject(this.selectedFromCurrency);
    this.currencySharedService.setToCurrencySubject(this.selectedToCurrency);
    this.errorExist = false;
  }

  getCurrencyDetails(): void {
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
}
