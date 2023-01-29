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
];

@NgModule({
  imports: [
    CommonModule,
    BackendErrorsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect])
  ],
  declarations: [RegisterComponent],
  providers: [AuthService],
})
export class AuthModule {}
