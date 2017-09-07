import { CarServiceService } from './car-service.service';
import { TestBed, inject } from '@angular/core/testing';

describe('CarServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarServiceService]
    });
  });

  it('should be created', inject([CarServiceService], (service: CarServiceService) => {
    expect(service).toBeTruthy();
  }));
});
