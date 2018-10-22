import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmFacturaDashboardComponent } from './adm-factura-dashboard.component';

describe('AdmFacturaDashboardComponent', () => {
  let component: AdmFacturaDashboardComponent;
  let fixture: ComponentFixture<AdmFacturaDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmFacturaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmFacturaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
