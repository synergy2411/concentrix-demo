import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import * as crypto from 'crypto-js';

@Injectable()
export class AuthServiceService {

  token = null;

  registerUser(email: string, password: string) {
    
    let encryptedPass = crypto.AES.encrypt("MY_SECRET_KEY", password);
    
    console.log("[ENCRYPTED PASSWORD]", encryptedPass);

    let decryptedVal = crypto.AES.decrypt(encryptedPass, password);

    console.log("[DECRYPTED VALUE]", decryptedVal.toString(crypto.enc.Utf8));

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

  constructor(private router: Router) { 
    this._idToken = '';
    this._accessToken = '';
    this._expiresAt = 0;
  }

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

  // SSO Code

  auth0 = new auth0.WebAuth({
    clientID: 'MMh3zlDDoeAOLXUHZhmTUMfJHZNCcdff',
    domain: 'dev-hc0a9pi8.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/product',
    scope: 'openid'
  });

  private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;

  get accessToken(): string {
    return this._accessToken;
  }

  get idToken(): string {
    return this._idToken;
  }

  ssoLogin() {
    this.auth0.authorize();
  }







}
