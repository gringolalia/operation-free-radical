import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LustPage } from './lust.page';

describe('LustPage', () => {
  let component: LustPage;
  let fixture: ComponentFixture<LustPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LustPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LustPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
