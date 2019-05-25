import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthServiceService {

  token = null;

  registerUser(email : string, password : string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log("USER CREATED");
      }).catch(err => console.log(err))
  }

  loginUser(email : string, password : string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log("LOGGED-IN");

        firebase.auth().currentUser.getIdToken()
          .then(token => {
            console.log(token);
            this.token = token;
          }).catch(err => console.log(err))
      }).catch(err => console.log(err));
  }

  constructor() { }

  getToken(){
    return this.token;
  }

  isUserAuthenticated(){
    return this.token != null;
  }

}
