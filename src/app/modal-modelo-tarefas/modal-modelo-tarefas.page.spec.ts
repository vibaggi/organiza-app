import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModeloTarefasPage } from './modal-modelo-tarefas.page';

describe('ModalModeloTarefasPage', () => {
  let component: ModalModeloTarefasPage;
  let fixture: ComponentFixture<ModalModeloTarefasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalModeloTarefasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalModeloTarefasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
