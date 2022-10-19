import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyFromToInputComponent } from './currency-from-to-input.component';

describe('CurrencyFromToInputComponent', () => {
  let component: CurrencyFromToInputComponent;
  let fixture: ComponentFixture<CurrencyFromToInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrencyFromToInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyFromToInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
