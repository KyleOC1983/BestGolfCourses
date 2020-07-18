import { TestBed } from '@angular/core/testing';

import { NewcourseService } from './newcourse.service';

describe('NewcourseService', () => {
  let service: NewcourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewcourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
