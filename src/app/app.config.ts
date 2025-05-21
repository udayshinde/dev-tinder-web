import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { userFeatureKey, userReducer } from '../components/state/user/user.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),
  provideStore({ [userFeatureKey]: userReducer }),
  provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideEffects(), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
