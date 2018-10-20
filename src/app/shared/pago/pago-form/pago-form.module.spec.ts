import { PagoFormModule } from './pago-form.module';

describe('PagoFormModule', () => {
  let pagoFormModule: PagoFormModule;

  beforeEach(() => {
    pagoFormModule = new PagoFormModule();
  });

  it('should create an instance', () => {
    expect(pagoFormModule).toBeTruthy();
  });
});
