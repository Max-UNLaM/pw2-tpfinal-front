import { UserPagoModule } from './user-pago.module';

describe('UserPagoModule', () => {
  let userPagoModule: UserPagoModule;

  beforeEach(() => {
    userPagoModule = new UserPagoModule();
  });

  it('should create an instance', () => {
    expect(userPagoModule).toBeTruthy();
  });
});
