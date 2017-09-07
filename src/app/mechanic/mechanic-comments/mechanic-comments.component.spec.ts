import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicCommentsComponent } from './mechanic-comments.component';

describe('MechanicCommentsComponent', () => {
  let component: MechanicCommentsComponent;
  let fixture: ComponentFixture<MechanicCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
