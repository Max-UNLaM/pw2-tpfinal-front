import { UnidadTablaModule } from './unidad-tabla.module';

describe('UnidadTablaModule', () => {
  let unidadTablaModule: UnidadTablaModule;

  beforeEach(() => {
    unidadTablaModule = new UnidadTablaModule();
  });

  it('should create an instance', () => {
    expect(unidadTablaModule).toBeTruthy();
  });
});
