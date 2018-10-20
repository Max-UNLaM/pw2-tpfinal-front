import { TestBed } from '@angular/core/testing';

import { MinutaService } from './minuta.service';

describe('MinutaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MinutaService = TestBed.get(MinutaService);
    expect(service).toBeTruthy();
  });
});
