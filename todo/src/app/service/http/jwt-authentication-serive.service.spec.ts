import { TestBed } from '@angular/core/testing';

import { JwtAuthenticationSeriveService } from './jwt-authentication-serive.service';

describe('JwtAuthenticationSeriveService', () => {
  let service: JwtAuthenticationSeriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtAuthenticationSeriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
