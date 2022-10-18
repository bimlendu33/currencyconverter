import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyconverterdetailsComponent } from '../components/currencyconverterdetails/currencyconverterdetails.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: CurrencyconverterdetailsComponent },
];


@NgModule({
  declarations: [
    CurrencyconverterdetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class CurrencyconverterdetailsModule { }
