import { TestBed } from '@angular/core/testing';

import { MregistrationService } from './mregistration.service';

describe('MregistrationService', () => {
  let service: MregistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MregistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
