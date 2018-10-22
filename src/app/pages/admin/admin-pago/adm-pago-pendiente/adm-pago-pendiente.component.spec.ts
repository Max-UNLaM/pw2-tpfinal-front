import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPagoPendienteComponent } from './adm-pago-pendiente.component';

describe('AdmPagoPendienteComponent', () => {
  let component: AdmPagoPendienteComponent;
  let fixture: ComponentFixture<AdmPagoPendienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmPagoPendienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmPagoPendienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
