import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CurrencySharedService } from 'src/app/sharedService/currencySharedValues';

@Component({
  selector: 'app-currecyexchange',
  templateUrl: './currecyexchangeinputvalue.component.html',
  styleUrls: ['./currecyexchangeinputvalue.component.css']
})
export class CurrecyexchangeInputValueComponent implements OnInit {

  amountSelected: number = 1;
  defaultMarketCurrency: string = '';
  latestRatesList: string[] = [];

  constructor(private currencySharedvalues: CurrencySharedService, private cd: ChangeDetectorRef) { }
  ngOnInit(): void {

  }

  amoutnvalueChaged() {
    this.currencySharedvalues.setSelectedAmountSubject(this.amountSelected);
  }

  getCurrencyInfo(currencyDetails: any): void {
    this.defaultMarketCurrency = '1 ' + currencyDetails.selectedFromCurrency + ' = ' + currencyDetails.resp.info.rate + ' ' + currencyDetails.selectedToCurrency;
    this.cd.detectChanges();
  }

}
