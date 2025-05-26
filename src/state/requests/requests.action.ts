import { createAction, props } from "@ngrx/store";
import { Requests } from "./requests.model";

export const addRequests = createAction(
    '[Requests] Add Requests',
    props<{ requests: Requests }>()
)

export const removeRequests = createAction(
    '[Requests] Remove Requests'
)