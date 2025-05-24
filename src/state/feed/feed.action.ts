import { createAction, props } from "@ngrx/store";

export const addFeed = createAction(
    '[Feed] Add Feed',
    props<{ feed: any[] }>()
);
export const removeFeed = createAction('[Feed] Remove Feed');

