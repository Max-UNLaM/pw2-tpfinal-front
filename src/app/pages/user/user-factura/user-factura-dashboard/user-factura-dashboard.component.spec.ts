import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFacturaDashboardComponent } from './user-factura-dashboard.component';

describe('UserFacturaDashboardComponent', () => {
  let component: UserFacturaDashboardComponent;
  let fixture: ComponentFixture<UserFacturaDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFacturaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFacturaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
