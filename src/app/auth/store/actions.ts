import { RegisterRequestInterface } from './../types/register.request.interface';
import { ActionTypes } from './actionType';
import { createAction, props } from '@ngrx/store';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ requerst: RegisterRequestInterface }>()
);
