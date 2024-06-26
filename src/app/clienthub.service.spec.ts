import { TestBed } from '@angular/core/testing';

import { ClienthubService } from './clienthub.service';

describe('ClienthubService', () => {
  let service: ClienthubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienthubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
