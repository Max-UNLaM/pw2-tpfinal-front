import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReclamoListComponent } from './user-reclamo-list.component';

describe('UserReclamoListComponent', () => {
  let component: UserReclamoListComponent;
  let fixture: ComponentFixture<UserReclamoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReclamoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReclamoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
