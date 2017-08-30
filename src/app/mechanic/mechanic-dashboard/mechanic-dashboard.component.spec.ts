import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicDashboardComponent } from './mechanic-dashboard.component';

describe('MechanicDashboardComponent', () => {
  let component: MechanicDashboardComponent;
  let fixture: ComponentFixture<MechanicDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
