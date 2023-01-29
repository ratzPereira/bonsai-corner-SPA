import { BackendErrorsInterface } from './../../shared/types/backend.errors.interface';
import { CurrentUserInterface } from './../../shared/types/currentUser.interface';
export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUSer: CurrentUserInterface | null
  isLoggedIn: boolean | null
  validationError: BackendErrorsInterface | null
}
