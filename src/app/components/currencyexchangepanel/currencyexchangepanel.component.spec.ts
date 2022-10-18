import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyexchangepanelComponent } from './currencyexchangepanel.component';

describe('CurrencyexchangepanelComponent', () => {
  let component: CurrencyexchangepanelComponent;
  let fixture: ComponentFixture<CurrencyexchangepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyexchangepanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyexchangepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
