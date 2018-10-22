import { TestBed, inject } from '@angular/core/testing';

import { FacturaPagoResolverService } from './factura-pago-resolver.service';

describe('FacturaVerResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacturaPagoResolverService]
    });
  });

  it('should be created', inject([FacturaPagoResolverService], (service: FacturaPagoResolverService) => {
    expect(service).toBeTruthy();
  }));
});
