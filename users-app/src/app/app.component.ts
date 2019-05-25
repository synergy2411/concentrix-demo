import { AuthServiceService } from './services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Awesome App!';

  constructor(public dataService: DataService,
              public authService : AuthServiceService) { }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCVhUId-sI3pYE4ZtKY5L55z-faSmMBfrc",
      authDomain: "cnx-demo.firebaseapp.com"
    })
  }

  onIncrease() {
    this.dataService.counter++;
  }

}
