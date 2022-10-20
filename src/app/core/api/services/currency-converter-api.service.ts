import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { singleConvertValue } from 'src/app/mocks/currency-convertor-mocks';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrencyConverterApiService {
  apiRoot: string = environment.rootAPI;
  constructor(private http: HttpClient) {}

  getCurrencyDetailsForConversion(fromCurrency: string, toCurrency: string, amount: number): Observable<any> {
    // TODO -> we can later move this to global HTTP interceptor to make it common among service
    let headers = new HttpHeaders().set('apikey', environment.appKey);

    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    const url = `${this.apiRoot}/fixer/convert?&to=${toCurrency}&from=${fromCurrency}&amount=${amount}`;
    return this.http.get(url, { headers: headers });
  }
}
