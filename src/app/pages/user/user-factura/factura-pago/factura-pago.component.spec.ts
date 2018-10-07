import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaPagoComponent } from './factura-pago.component';

describe('FacturaPagoComponent', () => {
  let component: FacturaPagoComponent;
  let fixture: ComponentFixture<FacturaPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
