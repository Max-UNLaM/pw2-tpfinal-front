import { TestBed, inject } from '@angular/core/testing';

import { ExpensaService } from './expensa.service';

describe('ExpensaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpensaService]
    });
  });

  it('should be created', inject([ExpensaService], (service: ExpensaService) => {
    expect(service).toBeTruthy();
  }));
});
