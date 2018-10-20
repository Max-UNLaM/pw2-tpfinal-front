import { TitlebarModule } from './titlebar.module';

describe('TitlebarModule', () => {
  let titlebarModule: TitlebarModule;

  beforeEach(() => {
    titlebarModule = new TitlebarModule();
  });

  it('should create an instance', () => {
    expect(titlebarModule).toBeTruthy();
  });
});
