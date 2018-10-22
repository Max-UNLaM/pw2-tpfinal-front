import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmFacturaGenerarComponent } from './adm-factura-generar.component';

describe('AdmFacturaGenerarComponent', () => {
  let component: AdmFacturaGenerarComponent;
  let fixture: ComponentFixture<AdmFacturaGenerarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmFacturaGenerarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmFacturaGenerarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
