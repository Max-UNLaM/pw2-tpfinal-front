import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPagoDashboardComponent } from './user-pago-dashboard.component';

describe('UserPagoDashboardComponent', () => {
  let component: UserPagoDashboardComponent;
  let fixture: ComponentFixture<UserPagoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPagoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPagoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
