import { RegisterRequestInterface } from './../../types/register.request.interface';
import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import { AuthService } from './../../services/auth.service';
import { isSubmittingSelector } from './../../store/selectors';
import { registerAction } from '../../store/actions/register.action';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'bc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;

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
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = this.form.value;
    this.store.dispatch(registerAction({ request }));
    this.authService
      .register(this.form.value)
      .subscribe((currentUser: CurrentUserInterface) =>
        console.log(currentUser)
      );
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }
}
