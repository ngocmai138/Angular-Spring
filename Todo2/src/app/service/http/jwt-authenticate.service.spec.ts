import { TestBed } from '@angular/core/testing';

import { JwtAuthenticateService } from './jwt-authenticate.service';

describe('JwtAuthenticateService', () => {
  let service: JwtAuthenticateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtAuthenticateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
