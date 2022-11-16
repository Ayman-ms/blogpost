import { TestBed } from '@angular/core/testing';

import { UsersRollService } from './users-roll.service';

describe('UsersRollService', () => {
  let service: UsersRollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersRollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
