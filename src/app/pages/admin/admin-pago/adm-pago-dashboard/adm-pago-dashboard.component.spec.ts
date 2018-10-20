import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPagoDashboardComponent } from './adm-pago-dashboard.component';

describe('AdmPagoDashboardComponent', () => {
  let component: AdmPagoDashboardComponent;
  let fixture: ComponentFixture<AdmPagoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmPagoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmPagoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
