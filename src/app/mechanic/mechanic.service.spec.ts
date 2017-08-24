import { TestBed, inject } from '@angular/core/testing';

import { MechanicService } from './mechanic.service';

describe('MechanicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MechanicService]
    });
  });

  it('should be created', inject([MechanicService], (service: MechanicService) => {
    expect(service).toBeTruthy();
  }));
});
