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
  currencyName: string = '';

  @Output() sendCurrencyInfo = new EventEmitter();

  constructor(
    private currencySharedvalues: CurrencyStateService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currencySharedvalues.setSelectedAmountSubject(this.amountSelected);
    this.currencySharedvalues.getCurrencyName().subscribe((res) => {
      this.currencyName = res;
    });
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
