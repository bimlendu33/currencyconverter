import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('../modules/currencyconverter.module').then(m => m.CurrencyconverterModule) },
  { path: 'currency-converter-details', loadChildren: () => import('../modules/currencyconverterdetails.module').then(m => m.CurrencyconverterdetailsModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
