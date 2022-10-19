import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./currency-converter/currency-converter.module').then((m) => m.CurrencyConverterModule),
  },
  {
    path: 'currency-converter-details',
    loadChildren: () =>
      import('./currency-converter-details/currency-converter-details.module').then(
        (m) => m.CurrencyConverterDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
