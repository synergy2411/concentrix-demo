import { AuthServiceService } from './auth-service.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
  intercept(req : HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>>{

    console.log("[AUTH INTERCEPTOR WORKS]");

    const cloneReq = req.clone({
      params : new HttpParams().set("auth", this.authService.getToken() )
    })

    return next.handle(cloneReq);

  }

  constructor(private authService : AuthServiceService) { }
}
