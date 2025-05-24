import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ConnectionState } from "./connections.reducer";

export const selectConnectionState = createFeatureSelector<ConnectionState>('connections'); // must match feature key

export const selectConnections = createSelector(
    selectConnectionState,
    (state) => {
        return state?.connections || null;
    }
);