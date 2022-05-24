import { TestBed } from '@angular/core/testing';

import { OnorbitentityService } from './onorbitentity.service';

describe('OnorbitentityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnorbitentityService = TestBed.get(OnorbitentityService);
    expect(service).toBeTruthy();
  });
});
