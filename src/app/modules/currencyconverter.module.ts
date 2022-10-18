import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyconverterComponent } from '../components/currencyconverter/currencyconverter.component';
import { RouterModule, Routes } from '@angular/router';
import { CurrecyexchangeInputValueComponent } from '../components/currecyexchange/currecyexchangeinputvalue.component';
import { CurrencyexchangepanelComponent } from '../components/currencyexchangepanel/currencyexchangepanel.component';
import { FormsModule } from '@angular/forms';
import { SimilarcurrenciesComponent } from '../components/similarcurrencies/similarcurrencies.component';


const routes: Routes = [
  { path: '', component: CurrencyconverterComponent },
];


@NgModule({
  declarations: [
    CurrencyconverterComponent,
    CurrecyexchangeInputValueComponent,
    CurrencyexchangepanelComponent,
    SimilarcurrenciesComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class CurrencyconverterModule { }
