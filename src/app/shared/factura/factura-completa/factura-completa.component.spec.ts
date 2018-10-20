import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaCompletaComponent } from './factura-completa.component';

describe('FacturaCompletaComponent', () => {
  let component: FacturaCompletaComponent;
  let fixture: ComponentFixture<FacturaCompletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaCompletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
