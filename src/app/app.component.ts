import { Component } from '@angular/core';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ChatZone';
  constructor(){
    ReactiveFormConfig.set({
      "validationMessage": {
         "minLength":"Enter minimum length of 8 characters.",
         "compare":"The value should be matched with {{0}}.",
         "alpha":"you can only enter alphabets."
    }
    });
  }
}
