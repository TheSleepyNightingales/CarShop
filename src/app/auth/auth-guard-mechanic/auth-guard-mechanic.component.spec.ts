import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthGuardMechanicComponent } from './auth-guard-mechanic.component';

describe('AuthGuardMechanicComponent', () => {
  let component: AuthGuardMechanicComponent;
  let fixture: ComponentFixture<AuthGuardMechanicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthGuardMechanicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthGuardMechanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
