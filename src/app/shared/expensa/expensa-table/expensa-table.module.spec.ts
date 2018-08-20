import { ExpensaTableModule } from './expensa-table.module';

describe('ExpensaTableModule', () => {
  let expensaTableModule: ExpensaTableModule;

  beforeEach(() => {
    expensaTableModule = new ExpensaTableModule();
  });

  it('should create an instance', () => {
    expect(expensaTableModule).toBeTruthy();
  });
});
