import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensaComponent } from './expensa.component';

describe('ExpensaComponent', () => {
  let component: ExpensaComponent;
  let fixture: ComponentFixture<ExpensaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
