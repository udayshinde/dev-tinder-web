import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { editProfileGuard } from './edit-profile.guard';

describe('editProfileGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => editProfileGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
