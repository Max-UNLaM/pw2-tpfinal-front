import { UserMinutaModule } from './user-minuta.module';

describe('UserMinutaModule', () => {
  let userMinutaModule: UserMinutaModule;

  beforeEach(() => {
    userMinutaModule = new UserMinutaModule();
  });

  it('should create an instance', () => {
    expect(userMinutaModule).toBeTruthy();
  });
});
