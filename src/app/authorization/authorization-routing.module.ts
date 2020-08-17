import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { EntrypageComponent } from './entrypage/entrypage.component';

const routes: Routes = [
  {
    path: '',
    component: EntrypageComponent,
  },

  {
    path: 'signIn',
    component: SigninComponent,
  },

  {
    path: 'signUp',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizationRoutingModule {}
