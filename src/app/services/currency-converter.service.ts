import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {
  apiRoot: string = 'https://api.apilayer.com/fixer';
  constructor(private http: HttpClient) { }

  getCurrencyDetailsForConversion(fromCurrency: string, toCurrency: string, amount: number): Observable<any> {
    let headers = new HttpHeaders().set('apikey', 'mr4FcWagOvLziy009RDdcGqFfEzvqli4');
    const url = `${this.apiRoot}/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`;
    return this.http.get(url, { headers: headers });
  }

}

