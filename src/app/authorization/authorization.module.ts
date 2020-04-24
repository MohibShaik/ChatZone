import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationRoutingModule } from './authorization-routing.module';
// import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RxReactiveFormsModule,
  ],
})
export class AuthorizationModule {}
