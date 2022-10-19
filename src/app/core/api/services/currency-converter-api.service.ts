import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

    const url = `${this.apiRoot}/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`;
    return this.http.get(url, { headers: headers });
  }
}
