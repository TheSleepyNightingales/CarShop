import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOffersComponent } from './user-offers.component';

describe('UserOffersComponent', () => {
  let component: UserOffersComponent;
  let fixture: ComponentFixture<UserOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
