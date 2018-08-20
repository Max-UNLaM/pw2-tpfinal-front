import { FacturaFiltroModule } from './factura-filtro.module';

describe('FacturaFiltroModule', () => {
  let facturaFiltroModule: FacturaFiltroModule;

  beforeEach(() => {
    facturaFiltroModule = new FacturaFiltroModule();
  });

  it('should create an instance', () => {
    expect(facturaFiltroModule).toBeTruthy();
  });
});
