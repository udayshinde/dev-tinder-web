import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user'); // must match feature key

export const selectUser = createSelector(
    selectUserState,
    (state) => {
        return state?.user || null;
    }
);
