import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateCarComponent } from './user-create-car.component';

describe('UserCreateCarComponent', () => {
  let component: UserCreateCarComponent;
  let fixture: ComponentFixture<UserCreateCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCreateCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
