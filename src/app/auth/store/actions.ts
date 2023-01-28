import { ActionTypes } from './actionType';
import { createAction, props } from '@ngrx/store';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ username: string; password: string; email: string }>()
);
