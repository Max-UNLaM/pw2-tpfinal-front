import { AdminPagoModule } from './admin-pago.module';

describe('AdminPagoModule', () => {
  let adminPagoModule: AdminPagoModule;

  beforeEach(() => {
    adminPagoModule = new AdminPagoModule();
  });

  it('should create an instance', () => {
    expect(adminPagoModule).toBeTruthy();
  });
});
