/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewpeopleComponent } from './newpeople.component';

describe('NewpeopleComponent', () => {
  let component: NewpeopleComponent;
  let fixture: ComponentFixture<NewpeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
