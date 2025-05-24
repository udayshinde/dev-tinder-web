import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeedState } from './feed.reducer';

export const selectFeedState = createFeatureSelector<FeedState>('feed'); // must match feature key

export const selectFeed = createSelector(
    selectFeedState,
    (state) => {
        return state?.feed || null;
    }
);
