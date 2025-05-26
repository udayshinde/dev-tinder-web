import { createAction, props } from "@ngrx/store";
import { Connections } from "./connections.model";

export const addConnections = createAction(
    '[Connections] Add Connections',
    props<{ connections: Connections }>()
);

export const removeConnections = createAction(
    '[Connections] Remove Connections'
)
