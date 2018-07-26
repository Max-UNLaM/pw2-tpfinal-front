import { AdminGastoModule } from './admin-gasto.module';

describe('AdminGastoModule', () => {
  let adminGastoModule: AdminGastoModule;

  beforeEach(() => {
    adminGastoModule = new AdminGastoModule();
  });

  it('should create an instance', () => {
    expect(adminGastoModule).toBeTruthy();
  });
});
