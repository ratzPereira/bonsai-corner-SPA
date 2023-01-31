import { LoginEffect } from './store/effects/login.effects';
import { LoginComponent } from './components/login/login.component';
import { PersistenceService } from './../shared/services/persistence.service';
import { BackendErrorsModule } from './../shared/modules/backendErrorMessages/backendErrorMessages.module';
import { RegisterEffect } from './store/effects/register.effect';
import { AuthService } from './services/auth.service';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    BackendErrorsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
