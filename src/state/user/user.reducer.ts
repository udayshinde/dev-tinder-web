import { createReducer, on } from '@ngrx/store';
import { addUser, logout } from './user.actions';
import { User } from './user.model';

export const userFeatureKey = 'user';

export interface UserState {
    user: User | null;
}

export const initialState: UserState = {
    user: null,
}

export const userReducer = createReducer(
    initialState,
    on(addUser, (state, { user }) => ({ ...state, user })),
    on(logout, () => initialState)
);

