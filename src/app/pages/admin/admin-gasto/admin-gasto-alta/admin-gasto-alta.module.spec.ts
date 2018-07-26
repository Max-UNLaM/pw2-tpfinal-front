import { AdminGastoAltaModule } from './admin-gasto-alta.module';

describe('AdminGastoAltaModule', () => {
  let adminGastoAltaModule: AdminGastoAltaModule;

  beforeEach(() => {
    adminGastoAltaModule = new AdminGastoAltaModule();
  });

  it('should create an instance', () => {
    expect(adminGastoAltaModule).toBeTruthy();
  });
});
