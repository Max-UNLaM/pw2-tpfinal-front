import { RegisterModule } from './create.module';

describe('RegisterModule', () => {
  let registerModule: RegisterModule;

  beforeEach(() => {
    registerModule = new RegisterModule();
  });

  it('should create an instance', () => {
    expect(registerModule).toBeTruthy();
  });
});
