import { createReducer, on } from '@ngrx/store';
import { addFeed, removeFeed } from './feed.action';

export const feedFeatureKey = 'feed';

export interface FeedState {
    feed: any | null;
}

export const initialState: FeedState = {
    feed: null,
}

export const feedReducer = createReducer(
    initialState,
    on(addFeed, (state, { feed }) => ({ ...state, feed })),
    on(removeFeed, () => initialState)
);

