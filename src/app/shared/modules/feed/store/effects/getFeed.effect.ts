import { GetFeedResponseInterface } from './../../components/feed/types/get.feed.response.interface';
import {
  getFeedAction,
  getFeedSuccessAction,
  getFeedFailureAction,
} from './../actions/getFeed.actions';
import { FeedService } from '../../components/feed/services/feed.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, of } from 'rxjs';

@Injectable()
export class GetFeedEffect {
  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedSuccessAction({ feed });
          }),
          catchError(() => {
            return of(getFeedFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly feedService: FeedService
  ) {}
}
