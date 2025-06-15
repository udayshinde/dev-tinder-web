import { CanDeactivateFn } from '@angular/router';
import { EditProfileComponent } from '../components/edit-profile/edit-profile.component';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Observable<boolean> | Promise<boolean>;
}

export const editProfileGuard: CanDeactivateFn<EditProfileComponent> = (component, currentRoute, currentState, nextState) => {
  return component.canDeactivate()
};
