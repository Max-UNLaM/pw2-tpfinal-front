import { FacturaTableModule } from './factura-table.module';

describe('FacturaTableModule', () => {
  let facturaTableModule: FacturaTableModule;

  beforeEach(() => {
    facturaTableModule = new FacturaTableModule();
  });

  it('should create an instance', () => {
    expect(facturaTableModule).toBeTruthy();
  });
});
