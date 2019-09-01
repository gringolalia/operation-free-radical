import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MistPage } from './mist.page';

describe('MistPage', () => {
  let component: MistPage;
  let fixture: ComponentFixture<MistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
