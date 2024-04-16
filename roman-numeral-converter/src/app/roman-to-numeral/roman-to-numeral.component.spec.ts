import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanToNumeralComponent } from './roman-to-numeral.component';

describe('RomanToNumeralComponent', () => {
  let component: RomanToNumeralComponent;
  let fixture: ComponentFixture<RomanToNumeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanToNumeralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomanToNumeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
