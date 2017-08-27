import { TestBed, inject } from '@angular/core/testing';

import { UserServicePubService } from './user-service-pub.service';

describe('UserServicePubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserServicePubService]
    });
  });

  it('should be created', inject([UserServicePubService], (service: UserServicePubService) => {
    expect(service).toBeTruthy();
  }));
});
