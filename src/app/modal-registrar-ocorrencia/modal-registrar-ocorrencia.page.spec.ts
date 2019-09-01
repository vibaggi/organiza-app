import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistrarOcorrenciaPage } from './modal-registrar-ocorrencia.page';

describe('ModalRegistrarOcorrenciaPage', () => {
  let component: ModalRegistrarOcorrenciaPage;
  let fixture: ComponentFixture<ModalRegistrarOcorrenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRegistrarOcorrenciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRegistrarOcorrenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
