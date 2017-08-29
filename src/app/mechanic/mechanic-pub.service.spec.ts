import { TestBed, inject } from '@angular/core/testing';

import { MechanicPubService } from './mechanic-pub.service';

describe('MechanicPubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MechanicPubService]
    });
  });

  it('should be created', inject([MechanicPubService], (service: MechanicPubService) => {
    expect(service).toBeTruthy();
  }));
});
