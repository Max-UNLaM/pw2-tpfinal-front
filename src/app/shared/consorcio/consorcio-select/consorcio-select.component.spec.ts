import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsorcioSelectComponent } from './consorcio-select.component';

describe('ConsorcioSelectComponent', () => {
  let component: ConsorcioSelectComponent;
  let fixture: ComponentFixture<ConsorcioSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsorcioSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsorcioSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
