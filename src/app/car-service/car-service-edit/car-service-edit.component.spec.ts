import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarServiceEditComponent } from './car-service-edit.component';

describe('CarServiceEditComponent', () => {
  let component: CarServiceEditComponent;
  let fixture: ComponentFixture<CarServiceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarServiceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarServiceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
