import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { SigninComponent } from './signin/signin.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FirebaseAuthService } from '../core/services/firebase-auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RxReactiveFormsModule,
  ],
  providers: [],
})
export class AuthorizationModule {}
