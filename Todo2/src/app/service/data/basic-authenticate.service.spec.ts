import { TestBed } from '@angular/core/testing';

import { BasicAuthenticateService } from './basic-authenticate.service';

describe('BasicAuthenticateService', () => {
  let service: BasicAuthenticateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAuthenticateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
