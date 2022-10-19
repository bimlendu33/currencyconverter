import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyAmountInputComponent } from './currency-amount-input.component';

describe('CurrencyAmountInputComponent', () => {
  let component: CurrencyAmountInputComponent;
  let fixture: ComponentFixture<CurrencyAmountInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrencyAmountInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyAmountInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
