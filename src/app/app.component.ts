import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { ConfigDetails } from './shared/enums/firebase-config.enum';
import { FirebaseAuthService } from './core/services/firebase-auth.service';

var firebaseConfig = {
  apiKey: 'AIzaSyAuE0-VliRsDENT0zffutc4f1p0T9UFSoU',
  authDomain: 'm-chat-49d85.firebaseapp.com',
  databaseURL: 'https://m-chat-49d85.firebaseio.com',
  projectId: 'm-chat-49d85',
  storageBucket: 'm-chat-49d85.appspot.com',
  messagingSenderId: '194684741152',
  appId: '1: 194684741152:web: 5f16c53a86b7daeadbfe45',
};
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
