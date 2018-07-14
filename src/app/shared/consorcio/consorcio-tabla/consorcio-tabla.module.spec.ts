import { ConsorcioTablaModule } from './consorcio-tabla.module';

describe('ConsorcioTablaModule', () => {
  let consorcioTablaModule: ConsorcioTablaModule;

  beforeEach(() => {
    consorcioTablaModule = new ConsorcioTablaModule();
  });

  it('should create an instance', () => {
    expect(consorcioTablaModule).toBeTruthy();
  });
});
