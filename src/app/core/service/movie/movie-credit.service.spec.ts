import { TestBed } from '@angular/core/testing';

import { MovieCreditService } from './movie-credit.service';

describe('MovieCrewService', () => {
  let service: MovieCreditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieCreditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
