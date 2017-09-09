import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPublicComponent } from './user-public.component';

describe('UserPublicComponent', () => {
  let component: UserPublicComponent;
  let fixture: ComponentFixture<UserPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
