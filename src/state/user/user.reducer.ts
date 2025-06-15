import { createReducer, on } from '@ngrx/store';
import { addUser, logout } from './user.actions';
import { User } from './user.model';

export const userFeatureKey = 'user';

export interface UserState {
    user: User | null;
}

const storedUser = localStorage.getItem('user');

const initialState: UserState = {
    user: storedUser ? JSON.parse(storedUser) : null
};

export const userReducer = createReducer(
    initialState,
    on(addUser, (state, { user }) => {
        localStorage.setItem('user', JSON.stringify(user));
        return ({ ...state, user });
    }),
    on(logout, () => {
        localStorage.removeItem('user');
        return initialState;
    })
);

