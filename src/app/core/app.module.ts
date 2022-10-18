import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http'
import { CurrencyconverterModule } from '../modules/currencyconverter.module';
import { CurrencyconverterdetailsModule } from '../modules/currencyconverterdetails.module';
import { CurrencySharedService } from '../sharedService/currencySharedValues';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CurrencyconverterModule,
    CurrencyconverterdetailsModule
  ],
  providers: [CurrencySharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
