import { UserGastoModule } from './user-gasto.module';

describe('UserGastoModule', () => {
  let userGastoModule: UserGastoModule;

  beforeEach(() => {
    userGastoModule = new UserGastoModule();
  });

  it('should create an instance', () => {
    expect(userGastoModule).toBeTruthy();
  });
});
