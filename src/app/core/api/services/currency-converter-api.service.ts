import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrencyConverterApiService {
  apiRoot: string = environment.rootAPI;
  constructor(private http: HttpClient) {}

  getCurrencyDetailsForConversion(fromCurrency: string, toCurrency: string, amount: number): Observable<any> {
    // TODO -> we can later move this to global HTTP interceptor to make it common among service

    const headers = this.createHeaders();

    const url = `${this.apiRoot}/fixer/convert?&to=${toCurrency}&from=${fromCurrency}&amount=${amount}`;
    return this.http.get(url, { headers: headers });
  }

  getCurrenciestList(): Observable<any> {
    const headers = this.createHeaders();

    const url = `${this.apiRoot}/fixer/symbols`;
    return this.http.get(url, { headers: headers });
  }

  private createHeaders() {
    let headers = new HttpHeaders().set('apikey', environment.appKey);

    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    return headers;
  }
}
