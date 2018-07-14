import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadTablaComponent } from './unidad-tabla.component';

describe('UnidadTablaComponent', () => {
  let component: UnidadTablaComponent;
  let fixture: ComponentFixture<UnidadTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
