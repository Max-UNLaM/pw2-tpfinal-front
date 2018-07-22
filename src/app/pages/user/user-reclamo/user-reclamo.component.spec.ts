import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReclamoComponent } from './user-reclamo.component';

describe('UserReclamoComponent', () => {
  let component: UserReclamoComponent;
  let fixture: ComponentFixture<UserReclamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReclamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
