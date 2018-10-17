import { FacturaCompletaModule } from './factura-completa.module';

describe('FacturaCompletaModule', () => {
  let facturaCompletaModule: FacturaCompletaModule;

  beforeEach(() => {
    facturaCompletaModule = new FacturaCompletaModule();
  });

  it('should create an instance', () => {
    expect(facturaCompletaModule).toBeTruthy();
  });
});
