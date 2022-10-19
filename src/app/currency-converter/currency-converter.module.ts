import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyConvertorComponent } from './currency-convertor/currency-convertor.component';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyAmountInputComponent } from './currency-amount-input/currency-amount-input.component';
import { FormsModule } from '@angular/forms';
import { CurrencyFromToInputComponent } from './currency-from-to-input/currency-from-to-input.component';
import { SimilarPupularCurrenciesComponent } from '../shared/components/similar-pupular-currencies/similar-pupular-currencies.component';

const routes: Routes = [{ path: '', component: CurrencyConvertorComponent }];

@NgModule({
  declarations: [
    CurrencyConvertorComponent,
    CurrencyAmountInputComponent,
    CurrencyFromToInputComponent,
    SimilarPupularCurrenciesComponent
  ],
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
})
export class CurrencyConverterModule {}
