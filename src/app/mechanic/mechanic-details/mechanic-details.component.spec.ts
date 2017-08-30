import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicDetailsComponent } from './mechanic-details.component';

describe('MechanicDetailsComponent', () => {
  let component: MechanicDetailsComponent;
  let fixture: ComponentFixture<MechanicDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
