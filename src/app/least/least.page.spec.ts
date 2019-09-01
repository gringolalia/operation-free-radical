import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeastPage } from './least.page';

describe('LeastPage', () => {
  let component: LeastPage;
  let fixture: ComponentFixture<LeastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeastPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
