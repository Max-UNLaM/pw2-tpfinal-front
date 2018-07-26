import { TestBed, inject } from '@angular/core/testing';

import { ChartsHelperService } from './charts-helper.service';

describe('ChartsHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartsHelperService]
    });
  });

  it('should be created', inject([ChartsHelperService], (service: ChartsHelperService) => {
    expect(service).toBeTruthy();
  }));
});
