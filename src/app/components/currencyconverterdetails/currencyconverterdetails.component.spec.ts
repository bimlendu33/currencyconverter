import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyconverterdetailsComponent } from './currencyconverterdetails.component';

describe('CurrencyconverterdetailsComponent', () => {
  let component: CurrencyconverterdetailsComponent;
  let fixture: ComponentFixture<CurrencyconverterdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyconverterdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyconverterdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
