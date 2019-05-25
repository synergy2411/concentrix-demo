import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class LoginGaurdService implements CanActivate {

  canActivate(){
    return this.authService.isUserAuthenticated();
  }

  constructor(private authService : AuthServiceService) { }
}
