import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CurrencyStateService } from 'src/app/shared/services/currency-state.service';

@Component({
  selector: 'app-currecyexchange',
  templateUrl: './currency-amount-input.component.html',
  styleUrls: ['./currency-amount-input.component.css'],
})
export class CurrencyAmountInputComponent implements OnInit {
  amountSelected: number = 1;
  defaultMarketCurrency: string = '';
  latestRatesList: string[] = [];

  constructor(private currencySharedvalues: CurrencyStateService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  amoutnvalueChaged() {
    this.currencySharedvalues.setSelectedAmountSubject(this.amountSelected);
  }

  getCurrencyInfo(currencyDetails: any): void {
    this.defaultMarketCurrency =
      '1 ' +
      currencyDetails.selectedFromCurrency +
      ' = ' +
      currencyDetails.resp.info.rate +
      ' ' +
      currencyDetails.selectedToCurrency;
    this.cd.detectChanges();
  }
}
