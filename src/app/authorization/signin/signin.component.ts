import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { RxwebValidators } from '@rxweb/reactive-form-validators';
import {
  RxFormBuilder,
  IFormGroup,
  RxwebValidators,
} from '@rxweb/reactive-form-validators';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SigninComponent implements OnInit {
  public signInForm: FormGroup;
  constructor(private router: Router, private formBuilder: RxFormBuilder) {}

  ngOnInit(): void {
    let user = new User();
    this.signInForm = this.formBuilder.formGroup(user);
  }

  public submit() {
    console.log(this.signInForm.valid);
  }
}
