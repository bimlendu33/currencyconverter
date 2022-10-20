import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyConverterEurGbpComponent } from './currency-converter-eur-gbp/currency-converter-eur-gbp.component';
import { CurrencyConverterModule } from '../currency-converter/currency-converter.module';

@NgModule({
  declarations: [CurrencyConverterEurGbpComponent],
  imports: [CommonModule, CurrencyConverterModule],
})
export class CurrencyConverterEurGbpModule {}
