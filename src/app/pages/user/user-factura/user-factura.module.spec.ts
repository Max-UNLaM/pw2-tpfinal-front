import { UserFacturaModule } from './user-factura.module';

describe('UserFacturaModule', () => {
  let userFacturaModule: UserFacturaModule;

  beforeEach(() => {
    userFacturaModule = new UserFacturaModule();
  });

  it('should create an instance', () => {
    expect(userFacturaModule).toBeTruthy();
  });
});
