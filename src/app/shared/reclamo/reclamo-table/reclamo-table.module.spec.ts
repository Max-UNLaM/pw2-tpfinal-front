import { ReclamoTableModule } from './reclamo-table.module';

describe('ReclamoTableModule', () => {
  let reclamoTableModule: ReclamoTableModule;

  beforeEach(() => {
    reclamoTableModule = new ReclamoTableModule();
  });

  it('should create an instance', () => {
    expect(reclamoTableModule).toBeTruthy();
  });
});
