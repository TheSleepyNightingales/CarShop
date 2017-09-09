import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarServiceDetailsComponent } from './car-service-details.component';

describe('CarServiceDetailsComponent', () => {
  let component: CarServiceDetailsComponent;
  let fixture: ComponentFixture<CarServiceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarServiceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarServiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
