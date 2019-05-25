import { AuthServiceService } from './../../services/auth-service.service';
import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent {
  
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  password = new FormControl('', [
    Validators.required,
    this.hasExclamation
  ]);
  registerForm : FormGroup;

  // Custom Validator
  hasExclamation(input : FormControl){
    const exclamationMark  = input.value.indexOf("!") >= 0;
    return exclamationMark ? null : { needExclamation : true } 
  }

  constructor(private fb : FormBuilder, 
    private authService : AuthServiceService){
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password
    })
  }

  onRegister(){
    console.log(`Username : ${this.registerForm.value.username}
    Password : ${this.registerForm.value.password}`);
    
    this.authService.registerUser(
      this.registerForm.value.username,
      this.registerForm.value.password
    )

  }

}