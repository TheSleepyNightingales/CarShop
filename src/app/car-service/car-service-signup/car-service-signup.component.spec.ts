import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarServiceSignupComponent } from './service-signup.component';

describe('CarServiceSignupComponent', () => {
  let component: CarServiceSignupComponent;
  let fixture: ComponentFixture<CarServiceSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarServiceSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarServiceSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
