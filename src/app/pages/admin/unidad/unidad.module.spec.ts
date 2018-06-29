import { UnidadModule } from './unidad.module';

describe('UnidadModule', () => {
  let unidadModule: UnidadModule;

  beforeEach(() => {
    unidadModule = new UnidadModule();
  });

  it('should create an instance', () => {
    expect(unidadModule).toBeTruthy();
  });
});
