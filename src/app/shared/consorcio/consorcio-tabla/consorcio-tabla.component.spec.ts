import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsorcioTablaComponent } from './consorcio-tabla.component';

describe('ConsorcioTablaComponent', () => {
  let component: ConsorcioTablaComponent;
  let fixture: ComponentFixture<ConsorcioTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsorcioTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsorcioTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
