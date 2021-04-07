/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UslComponent } from './usl.component';

describe('UslComponent', () => {
  let component: UslComponent;
  let fixture: ComponentFixture<UslComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UslComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
