import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthServiceService {

  token = null;

  registerUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log("USER CREATED");
      }).catch(err => console.log(err))
  }

  loginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log("LOGGED-IN");

        firebase.auth().currentUser.getIdToken()
          .then(token => {
            // console.log(token);
            this.token = token;

            // Programmatic Navigation

            this.router.navigate(['/users']);
            // sessionStorage.setItem("token", token);
            // localStorage.setItem("token", token);

          }).catch(err => console.log(err))
      }).catch(err => console.log(err));
  }

  constructor(private router: Router) { }

  getToken() {
    return this.token;
  }

  isUserAuthenticated() {
    return this.token != null;
  }

  logout() {

    firebase.auth().signOut()
      .then(response => {
        this.token = null;
        this.router.navigate(["/login"]);
      })
      .catch(err => console.log(new Error("Problem in Logging out.")))
  }

}
