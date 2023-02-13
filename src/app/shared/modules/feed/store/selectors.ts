import { FeedStateInterface } from './../components/feed/types/feed.state.interface';
import { AppStateInterface } from './../../../types/app.state.interface';
import { createSelector } from '@ngrx/store';

export const feedFeatureSelector = (
  state: AppStateInterface
): FeedStateInterface => state.feed;

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.isLoading
);

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.error
);

export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.data
);
