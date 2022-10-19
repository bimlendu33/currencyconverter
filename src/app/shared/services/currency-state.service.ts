import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrencyStateService {
  amountToBeConverted = new BehaviorSubject<number>(1);
  fromCurrency = new BehaviorSubject<string>('');
  toCurrency = new BehaviorSubject<string>('');

  setSelectedAmountSubject(value: number): void {
    this.amountToBeConverted.next(value);
  }

  getSelectedAmountValue(): Observable<number> {
    return this.amountToBeConverted;
  }

  setFromCurrencySubject(value: string): void {
    this.fromCurrency.next(value);
  }

  getFromCurrencyValue(): Observable<string> {
    return this.fromCurrency;
  }

  setToCurrencySubject(value: string): void {
    this.toCurrency.next(value);
  }

  geToCurrencyValue(): Observable<string> {
    return this.toCurrency;
  }
}
