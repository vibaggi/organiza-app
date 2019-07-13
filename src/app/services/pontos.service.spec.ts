import { TestBed } from '@angular/core/testing';

import { PontosService } from './pontos.service';

describe('PontosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PontosService = TestBed.get(PontosService);
    expect(service).toBeTruthy();
  });
});
