import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { signUp } from 'src/app/shared/sign-up.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signUpForm: FormGroup;

  constructor(private router: Router, private formBuilder: RxFormBuilder) {}

  ngOnInit(): void {
    let signup = new signUp();
    this.signUpForm = this.formBuilder.formGroup(signup);
  }

  public submit() {
    console.log(this.signUpForm.valid);
  }

}
