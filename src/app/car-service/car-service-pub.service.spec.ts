import { TestBed, inject } from '@angular/core/testing';

import { CarServicePubService } from './car-service-pub.service';

describe('CarServicePubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarServicePubService]
    });
  });

  it('should be created', inject([CarServicePubService], (service: CarServicePubService) => {
    expect(service).toBeTruthy();
  }));
});
