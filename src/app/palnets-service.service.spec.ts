import { TestBed } from '@angular/core/testing';

import { PalnetsServiceService } from './palnets-service.service';

describe('PalnetsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PalnetsServiceService = TestBed.get(PalnetsServiceService);
    expect(service).toBeTruthy();
  });
});
