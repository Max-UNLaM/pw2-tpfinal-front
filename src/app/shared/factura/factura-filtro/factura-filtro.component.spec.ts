import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaFiltroComponent } from './factura-filtro.component';

describe('FacturaFiltroComponent', () => {
  let component: FacturaFiltroComponent;
  let fixture: ComponentFixture<FacturaFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaFiltroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
