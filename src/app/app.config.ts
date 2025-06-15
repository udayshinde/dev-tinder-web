import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { userFeatureKey, userReducer } from '../state/user/user.reducer';
import { feedFeatureKey, feedReducer } from '../state/feed/feed.reducer';
import { connectionsFeatureKey, connectionsReducer } from '../state/connections/connections.reducer';
import { requesteatureKey, requestReucer } from '../state/requests/requests.reducer';
import { authInterceptor } from '../interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),
  provideStore({
    [userFeatureKey]: userReducer, [feedFeatureKey]: feedReducer,
    [connectionsFeatureKey]: connectionsReducer,
    [requesteatureKey]: requestReucer
  }),
  provideHttpClient(withInterceptors([authInterceptor])),
  provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideEffects(), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
