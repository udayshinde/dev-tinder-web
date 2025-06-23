import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';
import { editProfileGuard } from './edit-profile.guard';
import { EditProfileComponent } from '../components/edit-profile/edit-profile.component';

describe('editProfileGuard', () => {
  const executeGuard: CanDeactivateFn<EditProfileComponent> = (...guardParameters) =>
    TestBed.runInInjectionContext(() => editProfileGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
