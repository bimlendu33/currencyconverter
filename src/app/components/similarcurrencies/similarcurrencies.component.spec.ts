import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarcurrenciesComponent } from './similarcurrencies.component';

describe('SimilarcurrenciesComponent', () => {
  let component: SimilarcurrenciesComponent;
  let fixture: ComponentFixture<SimilarcurrenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarcurrenciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarcurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
