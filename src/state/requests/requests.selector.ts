import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RequestState } from "./requests.reducer";

export const selectRequestState = createFeatureSelector<RequestState>('requests'); // must match feature key

export const selectRequests = createSelector(
    selectRequestState,
    (state) => {
        return state?.requests || null;
    }
);