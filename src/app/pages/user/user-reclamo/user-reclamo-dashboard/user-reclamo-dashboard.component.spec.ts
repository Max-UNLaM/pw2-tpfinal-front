import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReclamoDashboardComponent } from './user-reclamo-dashboard.component';

describe('UserReclamoDashboardComponent', () => {
  let component: UserReclamoDashboardComponent;
  let fixture: ComponentFixture<UserReclamoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReclamoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReclamoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
