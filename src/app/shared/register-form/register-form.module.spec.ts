import { RegisterFormModule } from './register-form.module';

describe('RegisterFormModule', () => {
  let registerFormModule: RegisterFormModule;

  beforeEach(() => {
    registerFormModule = new RegisterFormModule();
  });

  it('should create an instance', () => {
    expect(registerFormModule).toBeTruthy();
  });
});
