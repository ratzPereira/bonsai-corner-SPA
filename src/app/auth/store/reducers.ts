import { registerAction, registerSuccessAction, registerFailedAction } from './actions/register.action';
import { createReducer, on, Action } from '@ngrx/store';
import { AuthStateInterface } from './../types/authState.interface';
import { state } from '@angular/animations';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUSer: null,
  isLoggedIn: null,
  validationError: null
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationError: null
    })
  ),
   on(registerSuccessAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUSer: action.currentUser
   })),
   on(registerFailedAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    validationError: action.errors
   }))
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
