import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  public isLoggedIn: boolean = false;
  constructor(public firebaseAuth: AngularFireAuth) {}

  public login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        if (value) {
          alert('Success');
          localStorage.setItem('loggedInUser', JSON.stringify(value.user));
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }
}
