import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';
import { CurrencySharedService } from 'src/app/sharedService/currencySharedValues';

@Component({
  selector: 'app-similarcurrencies',
  templateUrl: './similarcurrencies.component.html',
  styleUrls: ['./similarcurrencies.component.css']
})
export class SimilarcurrenciesComponent implements OnInit {


  amountSelected: number = 1;
  defaultMarketCurrency: string = '';
  similarCurrencies: string[] = ["GIP", "CAD", "AUD", "CHF", "JOD", "OMR", "BHD", "KYD", "AMD"];
  relatedCovertedCurrency: any[] = [];

  constructor(private currencyConvertService: CurrencyConverterService, private currencyService: CurrencySharedService) { }

  ngOnInit(): void {

    this.currencyService.getSelectedAmountValue().subscribe((selectedAmount: number) => {
      this.currencyService.getSelectedFromAmountValue().subscribe((selectedFrom: string) => {
        let test: any = [];
        this.similarCurrencies.forEach((currencycode: string) => {
          this.currencyConvertService.getCurrencyDetailsForConversion(selectedFrom, currencycode, selectedAmount).subscribe((res: any) => {
            test.push(res)
            this.relatedCovertedCurrency.push(res);
          })
        })
      })
    })
  }

}
