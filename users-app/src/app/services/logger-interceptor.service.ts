import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class LoggerInterceptorService implements HttpInterceptor{

  intercept(req : HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>>{

    console.log("[Logger Interceptor Works]", req);

    const cloneReq = req.clone({
      headers : new HttpHeaders().set("Access-Control-Allow-Origin", "*")
    })

    return next.handle(cloneReq)
              .do(response => {
                console.log("[LOGGER RESPONSE]", response);
                return response;
              });
  }

}


// npm install rxjs-compat --save