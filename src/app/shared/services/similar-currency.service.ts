import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICurrencyLatest } from 'src/app/core/models/currency-converter.model';

@Injectable({ providedIn: 'root' })
export class SimilarCurrencyService {
  similarCurrenciesList = new BehaviorSubject<ICurrencyLatest[]>([]);

  setSimilarCurrencies(value: ICurrencyLatest): void {
    this.similarCurrenciesList.next(this.similarCurrenciesList.value.concat(value));
  }
  getSimilarCurrenciesList(): Observable<ICurrencyLatest[]> {
    return this.similarCurrenciesList;
  }
}
