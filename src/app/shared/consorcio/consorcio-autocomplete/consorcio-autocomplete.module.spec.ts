import { ConsorcioAutocompleteModule } from './consorcio-autocomplete.module';

describe('ConsorcioAutocompleteModule', () => {
  let consorcioAutocompleteModule: ConsorcioAutocompleteModule;

  beforeEach(() => {
    consorcioAutocompleteModule = new ConsorcioAutocompleteModule();
  });

  it('should create an instance', () => {
    expect(consorcioAutocompleteModule).toBeTruthy();
  });
});
