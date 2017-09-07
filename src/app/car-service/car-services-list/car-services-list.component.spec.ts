import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarServicesListComponent } from './car-services-list.component';

describe('ServicesListComponent', () => {
  let component: CarServicesListComponent;
  let fixture: ComponentFixture<CarServicesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarServicesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
