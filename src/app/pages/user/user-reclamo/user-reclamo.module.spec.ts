import { UserReclamoModule } from './user-reclamo.module';

describe('UserReclamoModule', () => {
  let userReclamoModule: UserReclamoModule;

  beforeEach(() => {
    userReclamoModule = new UserReclamoModule();
  });

  it('should create an instance', () => {
    expect(userReclamoModule).toBeTruthy();
  });
});
