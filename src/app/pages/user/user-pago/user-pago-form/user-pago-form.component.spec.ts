import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPagoFormComponent } from './user-pago-form.component';

describe('UserPagoFormComponent', () => {
  let component: UserPagoFormComponent;
  let fixture: ComponentFixture<UserPagoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPagoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPagoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
