import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCarRepairsComponent } from './user-car-repairs.component';

describe('UserCarRepairsComponent', () => {
  let component: UserCarRepairsComponent;
  let fixture: ComponentFixture<UserCarRepairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCarRepairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCarRepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
