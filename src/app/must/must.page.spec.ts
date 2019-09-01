import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MustPage } from './must.page';

describe('MustPage', () => {
  let component: MustPage;
  let fixture: ComponentFixture<MustPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MustPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MustPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
