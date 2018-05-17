import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCsT0cQoNPFYlSYEyzdHAiHfgGSyXsnG0w",
      authDomain: "activite-angular-oc-two.firebaseapp.com",
      databaseURL: "https://activite-angular-oc-two.firebaseio.com",
      projectId: "activite-angular-oc-two",
      storageBucket: "",
      messagingSenderId: "631917309199"
    };
    firebase.initializeApp(config);
  }
}
