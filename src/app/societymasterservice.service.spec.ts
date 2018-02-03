import { TestBed, inject } from '@angular/core/testing';

import { SocietymasterserviceService } from './societymasterservice.service';

describe('SocietymasterserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocietymasterserviceService]
    });
  });

  it('should be created', inject([SocietymasterserviceService], (service: SocietymasterserviceService) => {
    expect(service).toBeTruthy();
  }));
});
