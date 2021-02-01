/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaybackComponent } from './payback.component';

describe('PaybackComponent', () => {
  let component: PaybackComponent;
  let fixture: ComponentFixture<PaybackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaybackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaybackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
