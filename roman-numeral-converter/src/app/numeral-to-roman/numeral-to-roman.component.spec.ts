import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeralToRomanComponent } from './numeral-to-roman.component';

describe('NumeralToRomanComponent', () => {
  let component: NumeralToRomanComponent;
  let fixture: ComponentFixture<NumeralToRomanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeralToRomanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumeralToRomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
