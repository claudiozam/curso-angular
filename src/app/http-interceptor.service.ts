import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    console.log('Ejecutando el HttpInterceptorService');
    console.log('Estoy en la url: ' + req.url);

    //return next.handle(req);
    return next.handle(req).pipe(
      catchError((error) => {
        console.log('error is intercept!!!!!!!!!!')
        console.error(error);
        return throwError(error.message);
      })
    )
  
  
  }
}