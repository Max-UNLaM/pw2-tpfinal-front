import { AdminStatisticsModule } from './admin-statistics.module';

describe('AdminStatisticsModule', () => {
  let adminStatisticsModule: AdminStatisticsModule;

  beforeEach(() => {
    adminStatisticsModule = new AdminStatisticsModule();
  });

  it('should create an instance', () => {
    expect(adminStatisticsModule).toBeTruthy();
  });
});
