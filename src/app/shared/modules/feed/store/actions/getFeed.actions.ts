import { GetFeedResponseInterface } from './../../components/feed/types/get.feed.response.interface';
import { ActionType } from './../actionTypes';
import { createAction, props } from '@ngrx/store';

export const getFeedAction = createAction(
  ActionType.GET_FEED,
  props<{ url: string }>()
);

export const getFeedSuccessAction = createAction(
  ActionType.GET_FEED_SUCCESS,
  props<{ feed: GetFeedResponseInterface }>()
);

export const getFeedFailureAction = createAction(ActionType.GET_FEED_FAILURE);

