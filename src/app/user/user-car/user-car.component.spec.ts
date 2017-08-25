import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCarComponent } from './user-car.component';

describe('UserCarComponent', () => {
  let component: UserCarComponent;
  let fixture: ComponentFixture<UserCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
