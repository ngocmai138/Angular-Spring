import { TestBed } from '@angular/core/testing';

import { HelloWorldServiceService } from './hello-world-service.service';

describe('HelloWorldServiceService', () => {
  let service: HelloWorldServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloWorldServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
