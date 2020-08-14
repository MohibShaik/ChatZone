import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { ConfigDetails } from './shared/enums/firebase-config.enum';
import { FirebaseAuthService } from './core/services/firebase-auth.service';

var firebaseConfig = require('../assets/config/firebase-config.json');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }
  title = "M'Chat";
}
