import { Component, OnInit } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { CurrencyConverterApiService } from 'src/app/core/api/services/currency-converter-api.service';
import { ICurrencyLatest } from 'src/app/core/models/currency-converter.model';
import { CurrencyStateService } from 'src/app/shared/services/currency-state.service';

@Component({
  selector: 'app-similar-pupular-currencies',
  templateUrl: './similar-pupular-currencies.component.html',
  styleUrls: ['./similar-pupular-currencies.component.css'],
})
export class SimilarPupularCurrenciesComponent implements OnInit {
  amountSelected: number = 1;
  defaultMarketCurrency: string = '';
  similarCurrencies: string[] = ['GIP', 'CAD', 'AUD', 'CHF', 'JOD', 'OMR', 'BHD', 'KYD', 'AMD'];
  relatedCovertedCurrency: any[] = [];

  constructor(
    private currencyConvertService: CurrencyConverterApiService,
    private currencyService: CurrencyStateService
  ) {}

  ngOnInit(): void {
    this.currencyService
      .getSelectedAmountValue()
      .pipe(
        mergeMap((amountSelected) =>
          this.currencyService.getFromCurrencyValue().pipe(map((currencyFrom) => ({ amountSelected, currencyFrom })))
        )
      )
      .subscribe((res: any) => {
        let similarConversionList: any = [];
        this.similarCurrencies.forEach((currencycode: string) => {
          this.currencyConvertService
            .getCurrencyDetailsForConversion(res.currencyFrom, currencycode, res.amountSelected)
            .subscribe((res: ICurrencyLatest) => {
              similarConversionList.push(res);
              this.relatedCovertedCurrency.push(res);
            });
        });
      });
  }
}
