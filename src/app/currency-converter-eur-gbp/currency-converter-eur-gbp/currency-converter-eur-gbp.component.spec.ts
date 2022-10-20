import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyConverterEurGbpComponent } from './currency-converter-eur-gbp.component';

describe('CurrencyConverterEurGbpComponent', () => {
  let component: CurrencyConverterEurGbpComponent;
  let fixture: ComponentFixture<CurrencyConverterEurGbpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrencyConverterEurGbpComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyConverterEurGbpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
