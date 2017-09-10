import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthGuardMechanic } from './auth-guard-mechanic.component';

describe('AuthGuardMechanicComponent', () => {
  let component: AuthGuardMechanic;
  let fixture: ComponentFixture<AuthGuardMechanic>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthGuardMechanic ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthGuardMechanic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
