import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSignupComponent } from './service-signup.component';

describe('ServiceSignupComponent', () => {
  let component: ServiceSignupComponent;
  let fixture: ComponentFixture<ServiceSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
