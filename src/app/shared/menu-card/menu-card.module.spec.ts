import { MenuCardModule } from './menu-card.module';

describe('MenuCardModule', () => {
  let menuCardModule: MenuCardModule;

  beforeEach(() => {
    menuCardModule = new MenuCardModule();
  });

  it('should create an instance', () => {
    expect(menuCardModule).toBeTruthy();
  });
});
