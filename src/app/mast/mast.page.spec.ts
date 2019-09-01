import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastPage } from './mast.page';

describe('MastPage', () => {
  let component: MastPage;
  let fixture: ComponentFixture<MastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
