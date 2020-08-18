import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  public isLoggedIn: boolean = false;
  constructor(public firebaseAuth: AngularFireAuth, private router: Router) {}

  public signIn(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        if (value) {
          localStorage.setItem('loggedInUser', JSON.stringify(value.user));
          this.router.navigate(['dashboard']);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.code === 'auth/wrong-password') {
          alert('wrong password');
        } else {
          alert('user not found , Please check your credentials');
        }
      });
  }

  public signUp(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        if (response) {
          alert('user created');
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }
}
