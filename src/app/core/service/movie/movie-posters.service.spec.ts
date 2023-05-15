import { TestBed } from '@angular/core/testing';

import { MoviePostersService } from './movie-posters.service';

describe('MoviePostersService', () => {
  let service: MoviePostersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviePostersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
