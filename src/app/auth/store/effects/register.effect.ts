import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import { AuthService } from './../../services/auth.service';
import {
  registerAction,
  registerFailedAction,
  registerSuccessAction,
} from './../actions/register.action';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return registerSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(registerFailedAction({errors: errorResponse.error}));
          })
        );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService
  ) {}
}
