import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoProcessComponent } from './pago-process.component';

describe('PagoProcessComponent', () => {
  let component: PagoProcessComponent;
  let fixture: ComponentFixture<PagoProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
