import { UnidadFormModule } from './unidad-form.module';

describe('UnidadFormModule', () => {
  let unidadFormModule: UnidadFormModule;

  beforeEach(() => {
    unidadFormModule = new UnidadFormModule();
  });

  it('should create an instance', () => {
    expect(unidadFormModule).toBeTruthy();
  });
});
