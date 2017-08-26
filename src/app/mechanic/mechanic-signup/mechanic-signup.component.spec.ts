import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicSignupComponent } from './mechanic-signup.component';

describe('MechanicSignupComponent', () => {
  let component: MechanicSignupComponent;
  let fixture: ComponentFixture<MechanicSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
