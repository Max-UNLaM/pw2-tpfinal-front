import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderShadeComponent } from './loader-shade.component';

describe('LoaderShadeComponent', () => {
  let component: LoaderShadeComponent;
  let fixture: ComponentFixture<LoaderShadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderShadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderShadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
