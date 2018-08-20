import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFacturaComponent } from './user-factura.component';

describe('UserFacturaComponent', () => {
  let component: UserFacturaComponent;
  let fixture: ComponentFixture<UserFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
