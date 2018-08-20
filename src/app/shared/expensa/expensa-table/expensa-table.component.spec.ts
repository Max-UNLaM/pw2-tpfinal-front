import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensaTableComponent } from './expensa-table.component';

describe('ExpensaTableComponent', () => {
  let component: ExpensaTableComponent;
  let fixture: ComponentFixture<ExpensaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
