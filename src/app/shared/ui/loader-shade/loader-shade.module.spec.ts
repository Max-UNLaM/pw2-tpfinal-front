import { LoaderShadeModule } from './loader-shade.module';

describe('LoaderShadeModule', () => {
  let loaderShadeModule: LoaderShadeModule;

  beforeEach(() => {
    loaderShadeModule = new LoaderShadeModule();
  });

  it('should create an instance', () => {
    expect(loaderShadeModule).toBeTruthy();
  });
});
