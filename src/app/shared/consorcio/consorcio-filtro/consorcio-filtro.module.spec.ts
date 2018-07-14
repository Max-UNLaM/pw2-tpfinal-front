import { ConsorcioFiltroModule } from './consorcio-filtro.module';

describe('ConsorcioFiltroModule', () => {
  let consorcioFiltroModule: ConsorcioFiltroModule;

  beforeEach(() => {
    consorcioFiltroModule = new ConsorcioFiltroModule();
  });

  it('should create an instance', () => {
    expect(consorcioFiltroModule).toBeTruthy();
  });
});
