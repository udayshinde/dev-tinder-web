import { createAction, props } from "@ngrx/store";
import { User } from "./user.model";

export const loginSuccess = createAction(
    '[Auth] Login Success',
    props<{ user: User }>()
)
export const logout = createAction('[Auth] Logout')

