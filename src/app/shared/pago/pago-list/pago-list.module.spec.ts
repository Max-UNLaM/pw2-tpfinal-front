import { PagoListModule } from './pago-list.module';

describe('PagoListModule', () => {
  let pagoListModule: PagoListModule;

  beforeEach(() => {
    pagoListModule = new PagoListModule();
  });

  it('should create an instance', () => {
    expect(pagoListModule).toBeTruthy();
  });
});
