import {
  getCurrentUserAction,
  getCurrentUserSuccessAction,
  getCurrentUserFailureAction,
} from './actions/getcurrentuser.actions';
import {
  loginSuccessAction,
  loginFailedAction,
  loginAction,
} from './actions/login.actions';
import {
  registerAction,
  registerSuccessAction,
  registerFailedAction,
} from './actions/register.action';
import { createReducer, on, Action } from '@ngrx/store';
import { AuthStateInterface } from './../types/authState.interface';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUSer: null,
  isLoggedIn: null,
  validationError: null,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationError: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUSer: action.currentUser,
    })
  ),
  on(
    registerFailedAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationError: action.errors,
    })
  ),
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationError: null,
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUSer: action.currentUser,
    })
  ),
  on(
    loginFailedAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationError: action.errors,
    })
  ),
  on(
    getCurrentUserAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUSer: action.currentUser,
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUSer: null,
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
