import { TestBed, inject } from '@angular/core/testing';

import { ConsorcioService } from './consorcio.service';

describe('ConsorcioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsorcioService]
    });
  });

  it('should be created', inject([ConsorcioService], (service: ConsorcioService) => {
    expect(service).toBeTruthy();
  }));
});
