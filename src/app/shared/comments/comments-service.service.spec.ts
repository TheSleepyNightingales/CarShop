import { TestBed, inject } from '@angular/core/testing';

import { CommentsServiceService } from './comments-service.service';

describe('CommentsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentsServiceService]
    });
  });

  it('should be created', inject([CommentsServiceService], (service: CommentsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
