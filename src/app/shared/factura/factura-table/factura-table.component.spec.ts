import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaTableComponent } from './factura-table.component';

describe('FacturaTableComponent', () => {
  let component: FacturaTableComponent;
  let fixture: ComponentFixture<FacturaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
