import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyStateService } from 'src/app/shared/services/currency-state.service';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-amount-input.component.html',
  styleUrls: ['./currency-amount-input.component.css'],
})
export class CurrencyAmountInputComponent implements OnInit {
  amountSelected: number = 1;
  defaultMarketCurrency: string = '';
  latestRatesList: string[] = [];
  detailsView: boolean = false;

  @Output() sendCurrencyInfo = new EventEmitter();

  constructor(
    private currencySharedvalues: CurrencyStateService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.router.url.split('/').indexOf('details') > -1) {
      this.detailsView = true;
    } else {
      this.detailsView = false;
    }
    this.currencySharedvalues.setSelectedAmountSubject(this.amountSelected);
  }

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
