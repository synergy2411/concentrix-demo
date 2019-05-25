import { AuthServiceService } from './../../services/auth-service.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private authService : AuthServiceService){}

  onLogin(loginForm : NgForm){
    console.log( "Username : " +  loginForm.value.username + 
                  "\nPAssword : " + loginForm.value.password );
    
      this.authService.loginUser(
          loginForm.value.username,
          loginForm.value.password
          )

  }

}
