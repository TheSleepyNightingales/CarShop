import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUploadPhotoComponent } from './user-upload-photo.component';

describe('UserUploadPhotoComponent', () => {
  let component: UserUploadPhotoComponent;
  let fixture: ComponentFixture<UserUploadPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUploadPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUploadPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
