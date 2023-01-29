import { AuthStateInterface } from './../types/authState.interface';
import { AppStateInterface } from './../../shared/types/app.state.interface';
import { createSelector } from '@ngrx/store';

export const authFeatureSelector = (
  state: AppStateInterface
): AuthStateInterface => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationError
);
