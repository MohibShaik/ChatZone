import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  RxFormBuilder,
  IFormGroup,
  RxwebValidators,
} from '@rxweb/reactive-form-validators';
import { User } from 'src/app/shared/user.model';
import * as firebase from 'firebase';
import { FirebaseAuthService } from '../../core/services/firebase-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signUpForm: FormGroup;
  public hide: boolean = true;

  constructor(
    private router: Router,
    private formBuilder: RxFormBuilder,
    private authService: FirebaseAuthService
  ) {}

  ngOnInit(): void {
    let user = new User();
    this.signUpForm = this.formBuilder.formGroup(user);
  }

  public signUp() {
    let userName = this.signUpForm.controls.email.value;
    let email = this.signUpForm.controls.email.value;
    let password = this.signUpForm.controls.password.value;
    this.authService.signUp(email, password);
  }
}
