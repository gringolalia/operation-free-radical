import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostPage } from './lost.page';

describe('LostPage', () => {
  let component: LostPage;
  let fixture: ComponentFixture<LostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
