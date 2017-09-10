import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarServiceMechanicsComponent } from './car-service-mechanics.component';

describe('CarServiceMechanicsComponent', () => {
  let component: CarServiceMechanicsComponent;
  let fixture: ComponentFixture<CarServiceMechanicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarServiceMechanicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarServiceMechanicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
