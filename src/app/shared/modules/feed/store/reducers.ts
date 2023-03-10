import {
  getFeedAction,
  getFeedSuccessAction,
  getFeedFailureAction,
} from './actions/getFeed.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { FeedStateInterface } from './../components/feed/types/feed.state.interface';

const initialState: FeedStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);


export function reducers(state: FeedStateInterface, action: Action){
    return feedReducer(state, action)
}