import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable({ providedIn: 'root' })
export class CurrencySharedService {

    selectedAmountSubject = new BehaviorSubject<number>(1);
    selectedFromCurrencyType = new BehaviorSubject<string>('');
    selectedToCurrencyType = new BehaviorSubject<string>('');

    setSelectedAmountSubject(value: number): void {
        this.selectedAmountSubject.next(value);
    }

    getSelectedAmountValue(): Observable<number> {
        return this.selectedAmountSubject;
    }

    setSelectedFromAmountSubject(value: string): void {
        this.selectedFromCurrencyType.next(value);
    }

    getSelectedFromAmountValue(): Observable<string> {
        return this.selectedFromCurrencyType;
    }

    setSelectedToAmountSubject(value: string): void {
        this.selectedToCurrencyType.next(value);
    }

    getSelectedAmountToValue(): Observable<string> {
        return this.selectedToCurrencyType;
    }
}