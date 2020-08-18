import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirebaseAuthService } from './core/services/firebase-auth.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import * as firebase from 'firebase';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';

var firebaseConfig = {
  apiKey: 'AIzaSyAuE0-VliRsDENT0zffutc4f1p0T9UFSoU',
  authDomain: 'm-chat-49d85.firebaseapp.com',
  databaseURL: 'https://m-chat-49d85.firebaseio.com',
  projectId: 'm-chat-49d85',
  storageBucket: 'm-chat-49d85.appspot.com',
  messagingSenderId: '194684741152',
  appId: '1: 194684741152:web: 5f16c53a86b7daeadbfe45',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
