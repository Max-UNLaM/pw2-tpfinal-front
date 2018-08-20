import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensaDialogComponent } from './expensa-dialog.component';

describe('ExpensaDialogComponent', () => {
  let component: ExpensaDialogComponent;
  let fixture: ComponentFixture<ExpensaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
