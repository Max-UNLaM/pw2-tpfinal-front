import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPagoComponent } from './user-pago.component';

describe('UserPagoComponent', () => {
  let component: UserPagoComponent;
  let fixture: ComponentFixture<UserPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
