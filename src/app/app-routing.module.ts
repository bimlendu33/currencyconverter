import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'eur-usd',
    loadChildren: () => import('./currency-converter/currency-converter.module').then((m) => m.CurrencyConverterModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'eur-usd',
  },
  {
    path: 'eur-gbp',
    pathMatch: 'full',
    loadChildren: () =>
      import('./currency-converter-eur-gbp/currency-converter-eur-gbp.module').then(
        (m) => m.CurrencyConverterEurGbpModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
