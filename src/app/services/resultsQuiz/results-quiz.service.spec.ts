import { TestBed } from '@angular/core/testing';

import { ResultsQuizService } from './results-quiz.service';

describe('ResultsQuizService', () => {
  let service: ResultsQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultsQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
