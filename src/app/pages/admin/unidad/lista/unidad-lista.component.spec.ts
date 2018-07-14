import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadListaComponent } from './unidad-lista.component';

describe('UnidadListaComponent', () => {
  let component: UnidadListaComponent;
  let fixture: ComponentFixture<UnidadListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
