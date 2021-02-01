/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdvencedComponent } from './advenced.component';

describe('AdvencedComponent', () => {
  let component: AdvencedComponent;
  let fixture: ComponentFixture<AdvencedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvencedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvencedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
