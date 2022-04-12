import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IUser } from '../interfaces';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      // catchError(err => {
      //   // Promise.resolve(undefined )
      //   return of(undefined); 
      // }),
      tap(event => {
        if (event instanceof HttpResponse) {
          //localhost:3000/login  ili register
          if (event.url?.endsWith('login') || event.url?.endsWith('register')) {
            //TODO: save user
            const newlyLoggedUser: IUser = event.body as IUser; //TODO Valq
            this.authService.handleLogin(newlyLoggedUser);
          } else if (event.url?.endsWith('logout')) {
            this.authService.handleLogout();
          }
        }
      }//,catchError(() => {})
      ));
  }
}
