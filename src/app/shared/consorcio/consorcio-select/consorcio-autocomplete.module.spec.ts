import { ConsorcioSelectModule } from './consorcio-select.module';

describe('ConsorcioSelectModule', () => {
  let consorcioAutocompleteModule: ConsorcioSelectModule;

  beforeEach(() => {
    consorcioAutocompleteModule = new ConsorcioSelectModule();
  });

  it('should create an instance', () => {
    expect(consorcioAutocompleteModule).toBeTruthy();
  });
});
