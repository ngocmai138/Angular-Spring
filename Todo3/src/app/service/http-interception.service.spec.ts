import { TestBed } from '@angular/core/testing';

import { HttpInterceptionService } from './http-interception.service';

describe('HttpInterceptionService', () => {
  let service: HttpInterceptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInterceptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
