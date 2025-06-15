import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take, tap } from 'rxjs';
import { selectUser } from '../state/user/user.selectors';


export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(selectUser).pipe(
    take(1),
    tap(user => {
      if (!user) {
        router.navigate(['/login']);
      }
    }),
    map(user => !!user)
  );
};
