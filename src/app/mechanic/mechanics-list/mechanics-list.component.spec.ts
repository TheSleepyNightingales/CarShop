import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicsListComponent } from './mechanics-list.component';

describe('MechanicsListComponent', () => {
  let component: MechanicsListComponent;
  let fixture: ComponentFixture<MechanicsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
