import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { ConfigDetails } from './shared/enums/firebase-config.enum';
import { FirebaseAuthService } from './core/services/firebase-auth.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    firebase.initializeApp(firebaseConfig);

    this.matIconRegistry.addSvgIcon(
      `user-icon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/svg/user.svg'
      )
    );
  }
  title = "M'Chat";
}
