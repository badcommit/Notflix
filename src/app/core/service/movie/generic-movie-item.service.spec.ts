import { TestBed } from '@angular/core/testing';

import { GenericMovieItemService } from './generic-movie-item.service';

describe('GenericMovieItemService', () => {
  let service: GenericMovieItemService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericMovieItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
