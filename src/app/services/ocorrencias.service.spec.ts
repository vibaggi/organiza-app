import { TestBed } from '@angular/core/testing';

import { OcorrenciasService } from './ocorrencias.service';

describe('OcorrenciasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OcorrenciasService = TestBed.get(OcorrenciasService);
    expect(service).toBeTruthy();
  });
});
