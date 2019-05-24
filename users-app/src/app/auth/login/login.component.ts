import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  onLogin(loginForm : NgForm){
    console.log( "Username : " +  loginForm.value.username + 
                  "\nPAssword : " + loginForm.value.password );
  }

}
