import { CarServiceDashboardComponent } from './car-service-dashboard.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('ServiceDashboardComponent', () => {
  let component: CarServiceDashboardComponent;
  let fixture: ComponentFixture<CarServiceDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarServiceDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarServiceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
