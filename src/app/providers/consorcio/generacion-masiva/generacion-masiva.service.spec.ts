import { TestBed } from '@angular/core/testing';

import { GeneracionMasivaService } from './generacion-masiva.service';

describe('GeneracionMasivaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneracionMasivaService = TestBed.get(GeneracionMasivaService);
    expect(service).toBeTruthy();
  });
});
