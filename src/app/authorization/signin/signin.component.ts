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
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SigninComponent implements OnInit {
  public signInForm: FormGroup;
  public hide: boolean = true;
  public ref = firebase.database().ref('users/');
  constructor(
    private router: Router,
    private formBuilder: RxFormBuilder,
    private authService: FirebaseAuthService
  ) {}

  ngOnInit(): void {
    let user = new User();
    this.signInForm = this.formBuilder.formGroup(user);
  }

  public submit() {
    let email = this.signInForm.controls.email.value;
    let password = this.signInForm.controls.password.value;
    this.authService.login(email, password);
  }
}
