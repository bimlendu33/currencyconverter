import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { CurrencyConverterModule } from './currency-converter/currency-converter.module';
import { CurrencyConverterEurGbpModule } from './currency-converter-eur-gbp/currency-converter-eur-gbp.module';
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CurrencyConverterModule,
    CurrencyConverterEurGbpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
