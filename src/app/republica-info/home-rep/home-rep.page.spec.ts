import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRepPage } from './home-rep.page';

describe('HomeRepPage', () => {
  let component: HomeRepPage;
  let fixture: ComponentFixture<HomeRepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRepPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
