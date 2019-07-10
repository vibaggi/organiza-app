import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreHomePage } from './pre-home.page';

describe('PreHomePage', () => {
  let component: PreHomePage;
  let fixture: ComponentFixture<PreHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
