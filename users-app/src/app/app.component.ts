import { AuthServiceService } from './services/auth-service.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from './services/data.service';
import * as firebase from 'firebase';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Awesome App!';

  jsScripts = "<h1>Heading</h1> <script>alert('Hello')</script>";

  dangerUrl = "javascript:alert('Hello World.')";
  safeUrl : any;

  constructor(public dataService: DataService,
              public authService : AuthServiceService,
              private sanitize : DomSanitizer,
              private cdRef : ChangeDetectorRef
              ) { 
                // this.cdRef.detach();
                this.safeUrl = this.sanitize.bypassSecurityTrustResourceUrl(this.dangerUrl);
                // this.cdRef.reattach();
              }

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
