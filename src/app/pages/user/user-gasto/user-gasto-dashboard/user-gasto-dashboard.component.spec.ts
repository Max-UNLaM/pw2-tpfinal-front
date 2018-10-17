import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGastoDashboardComponent } from './user-gasto-dashboard.component';

describe('UserGastoDashboardComponent', () => {
  let component: UserGastoDashboardComponent;
  let fixture: ComponentFixture<UserGastoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGastoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGastoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
