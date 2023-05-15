import { TestBed } from '@angular/core/testing';

import { MovielistService } from './movielist.service';

describe('MovieService', () => {
  let service: MovielistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovielistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
