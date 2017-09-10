import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarServiceOffersComponent } from './car-service-offers.component';

describe('CarServiceOffersComponent', () => {
  let component: CarServiceOffersComponent;
  let fixture: ComponentFixture<CarServiceOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarServiceOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarServiceOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
