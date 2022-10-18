import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, Component, EventEmitter, Input, NgZone, OnInit, Output } from '@angular/core';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';
import { CurrencySharedService } from 'src/app/sharedService/currencySharedValues';


@Component({
  selector: 'app-currencyexchangepanel',
  templateUrl: './currencyexchangepanel.component.html',
  styleUrls: ['./currencyexchangepanel.component.css']
})
export class CurrencyexchangepanelComponent implements OnInit {

  selectedFromCurrency: string = 'EUR';
  selectedToCurrency: string = 'USD';
  convertedAmount: number | undefined;
  errorExist: boolean = false;
  errorMsg: string = '';


  @Input() selectedAmount: number | undefined;
  @Output() currentCurrencyInfo = new EventEmitter();

  constructor(private currencyConvertService: CurrencyConverterService, private http: HttpClient, private currencySharedService: CurrencySharedService) { }

  ngOnInit(): void {
    this.getCurrencyDetails();
    this.currencySharedService.setSelectedFromAmountSubject(this.selectedFromCurrency);
    this.currencySharedService.setSelectedToAmountSubject(this.selectedToCurrency)
  }


  convertAmount(): void {
    this.errorExist = false;
    this.errorMsg = ""

    this.currencySharedService.getSelectedAmountValue().subscribe(res => {
      if (res <= 0 || (this.selectedFromCurrency === this.selectedToCurrency)) {
        if(res <= 0){
          this.errorExist = true;
          this.errorMsg = "amount must be greater than equals to 1"
        }else{
          this.errorExist = true;
          this.errorMsg = "From and To can not be same"
        }
      } else {
        this.errorExist = false;
        this.errorMsg = ""
        this.getCurrencyDetails();
      }
    })

  }

  swapExchangeValues(): void {
    const fromValue = this.selectedFromCurrency
    this.selectedFromCurrency = this.selectedToCurrency
    this.selectedToCurrency = fromValue
  }

  selectValueChanged(): void {
    this.currencySharedService.setSelectedFromAmountSubject(this.selectedFromCurrency);
    this.currencySharedService.setSelectedToAmountSubject(this.selectedToCurrency)
    this.errorExist = false;
  }

  getCurrencyDetails(): void {
    this.currencyConvertService.getCurrencyDetailsForConversion(this.selectedFromCurrency, this.selectedToCurrency, this.selectedAmount!).subscribe((res: any) => {
      this.convertedAmount = res.result;
      this.currentCurrencyInfo.emit({ resp: res, selectedFromCurrency: this.selectedFromCurrency, selectedToCurrency: this.selectedToCurrency });
    });
  }
}
