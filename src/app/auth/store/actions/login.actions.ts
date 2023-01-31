import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import { BackendObjectInterface } from './../../../shared/types/Backend.errorObject.interface';
import { LoginRequestInterface } from './../../types/login.request.interface';
import { ActionTypes } from './../actionType';
import { createAction, props } from '@ngrx/store';
export const loginAction = createAction(
    ActionTypes.LOGIN,
    props<{ request: LoginRequestInterface }>()
  );

  export const loginSuccessAction = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{ currentUser: CurrentUserInterface }>()
  );
  
  export const loginFailedAction = createAction(
    ActionTypes.LOGIN_FAILURE,
    props<{ errors: BackendObjectInterface }>()
  );