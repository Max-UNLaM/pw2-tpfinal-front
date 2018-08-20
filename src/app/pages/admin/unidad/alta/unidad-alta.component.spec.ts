import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadAltaComponent } from './unidad-alta.component';

describe('UnidadAltaComponent', () => {
  let component: UnidadAltaComponent;
  let fixture: ComponentFixture<UnidadAltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadAltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
