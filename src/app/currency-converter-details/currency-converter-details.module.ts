import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyConversionDetailsComponent } from './currency-conversion-details/currency-conversion-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: CurrencyConversionDetailsComponent }];

@NgModule({
  declarations: [CurrencyConversionDetailsComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class CurrencyConverterDetailsModule {}
