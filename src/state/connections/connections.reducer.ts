import { createReducer, on } from "@ngrx/store";
import { Connections } from "./connections.model";
import { addConnections, removeConnections } from "./connections.action";

export const connectionsFeatureKey = "connections";

export interface ConnectionState {
    connections: Connections | null;
}

export const initialState: ConnectionState = {
    connections: null,
}

export const connectionsReducer = createReducer(
    initialState,
    on(addConnections, (state, { connections }) => ({ ...state, connections })),
    on(removeConnections, () => initialState)
)