import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRepairComponent } from './add-repair.component';

describe('AddRepairComponent', () => {
  let component: AddRepairComponent;
  let fixture: ComponentFixture<AddRepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
