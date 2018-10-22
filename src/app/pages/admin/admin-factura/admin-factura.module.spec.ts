import { AdminFacturaModule } from './admin-factura.module';

describe('AdminFacturaModule', () => {
  let adminFacturaModule: AdminFacturaModule;

  beforeEach(() => {
    adminFacturaModule = new AdminFacturaModule();
  });

  it('should create an instance', () => {
    expect(adminFacturaModule).toBeTruthy();
  });
});
