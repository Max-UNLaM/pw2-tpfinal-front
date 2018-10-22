import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPagoComponent } from './admin-pago.component';

describe('AdminPagoComponent', () => {
  let component: AdminPagoComponent;
  let fixture: ComponentFixture<AdminPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
