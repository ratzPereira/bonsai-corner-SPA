import { BackendObjectInterface } from './../../shared/types/Backend.errorObject.interface';
import { CurrentUserInterface } from './../../shared/types/currentUser.interface';
export interface AuthStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  currentUSer: CurrentUserInterface | null
  isLoggedIn: boolean | null
  validationError: BackendObjectInterface | null
}
