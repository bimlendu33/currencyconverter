import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrencyStateService {
  amountToBeConverted = new BehaviorSubject<number>(1);
  fromCurrency = new ReplaySubject<string>();
  toCurrency = new ReplaySubject<string>();

  currencyName = new BehaviorSubject<string>('');

  getCurrencyName(): Observable<string> {
    return this.currencyName;
  }

  setCurrencyName(value: string): void {
    this.currencyName.next(value);
  }

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

  public ngOnDestroy(): void {
    this.amountToBeConverted.unsubscribe(); // or something similar
  }
}
