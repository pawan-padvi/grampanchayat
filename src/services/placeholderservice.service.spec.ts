import { TestBed } from '@angular/core/testing';

import { PlaceholderserviceService } from './placeholderservice.service';

describe('PlaceholderserviceService', () => {
  let service: PlaceholderserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceholderserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
