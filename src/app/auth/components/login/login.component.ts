import { isSubmittingSelector, validationErrorsSelector } from './../../store/selectors';
import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import { loginAction } from './../../store/actions/login.actions';
import { LoginRequestInterface } from './../../types/login.request.interface';
import { AuthService } from './../../services/auth.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BackendObjectInterface } from 'src/app/shared/types/Backend.errorObject.interface';
@Component({
    selector: 'bc-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
  })
  export class LoginComponent implements OnInit {
    form: FormGroup;
    isSubmitting$: Observable<boolean>;
    hasErrors$: Observable<BackendObjectInterface | null>;
  
    constructor(
      private readonly formBuilder: FormBuilder,
      private readonly store: Store,
      private readonly authService: AuthService
    ) {}


    ngOnInit(): void {
        this.initializeForm();
        this.initializeValues();
      }
    
      initializeForm(): void {
        this.form = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required],
        });
      }
    
      onSubmit(): void {
        const request: LoginRequestInterface = this.form.value;
        this.store.dispatch(loginAction({ request}));
        this.authService
          .login(this.form.value)
          .subscribe((currentUser: CurrentUserInterface) =>
            console.log(currentUser)
          );
      }
    
      initializeValues() {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        this.hasErrors$ = this.store.pipe(select(validationErrorsSelector));
      }

    }