import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConcluirTarefaPage } from './modal-concluir-tarefa.page';

describe('ModalConcluirTarefaPage', () => {
  let component: ModalConcluirTarefaPage;
  let fixture: ComponentFixture<ModalConcluirTarefaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConcluirTarefaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConcluirTarefaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
