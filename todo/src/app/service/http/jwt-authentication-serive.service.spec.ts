import { TestBed } from '@angular/core/testing';

import { JwtAuthenticationService } from './jwt-authentication.service';

describe('JwtAuthenticationSeriveService', () => {
  let service: JwtAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
