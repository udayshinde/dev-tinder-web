import { createReducer, on } from "@ngrx/store";
import { addRequests, removeRequests } from "./requests.action";
import { Requests } from "./requests.model";

export const requesteatureKey = "requests";

export interface RequestState {
    requests: Requests | null;
}

export const initialState: RequestState = {
    requests: null,
}

export const requestReucer = createReducer(
    initialState,
    on(addRequests, (state, { requests }) => ({ ...state, requests })),
    on(removeRequests, () => initialState)
)