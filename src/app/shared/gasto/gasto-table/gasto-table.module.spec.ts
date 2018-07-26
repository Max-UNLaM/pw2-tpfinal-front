import { GastoTableModule } from './gasto-table.module';

describe('GastoTableModule', () => {
  let gastoTableModule: GastoTableModule;

  beforeEach(() => {
    gastoTableModule = new GastoTableModule();
  });

  it('should create an instance', () => {
    expect(gastoTableModule).toBeTruthy();
  });
});
