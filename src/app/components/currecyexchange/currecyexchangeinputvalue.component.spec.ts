import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrecyexchangeInputValueComponent } from './currecyexchangeinputvalue.component';

describe('CurrecyexchangeInputValueComponent', () => {
  let component: CurrecyexchangeInputValueComponent;
  let fixture: ComponentFixture<CurrecyexchangeInputValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrecyexchangeInputValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrecyexchangeInputValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
