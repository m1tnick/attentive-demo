import { TestBed, inject } from '@angular/core/testing';

import { DogsService } from './dogs.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DogsService]
    });
  });

  it('should be created', inject([DogsService], (service: DogsService) => {
    expect(service).toBeTruthy();
  }));
});
