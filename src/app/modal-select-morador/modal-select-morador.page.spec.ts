import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSelectMoradorPage } from './modal-select-morador.page';

describe('ModalSelectMoradorPage', () => {
  let component: ModalSelectMoradorPage;
  let fixture: ComponentFixture<ModalSelectMoradorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSelectMoradorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSelectMoradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
