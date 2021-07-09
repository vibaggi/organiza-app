import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfiguracaoPage } from './modal-configuracao.page';

describe('ModalConfiguracaoPage', () => {
  let component: ModalConfiguracaoPage;
  let fixture: ComponentFixture<ModalConfiguracaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConfiguracaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfiguracaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
