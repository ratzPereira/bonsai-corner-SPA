import { LoginRequestInterface } from './../../types/login.request.interface';
import { BackendObjectInterface } from './../../../shared/types/Backend.errorObject.interface';
import { BackendErrorsInterface } from './../../../shared/types/backend.errors.interface';
import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import { RegisterRequestInterface } from '../../types/register.request.interface';
import { ActionTypes } from '../actionType';
import { createAction, props } from '@ngrx/store';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const registerFailedAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendObjectInterface }>()
);

