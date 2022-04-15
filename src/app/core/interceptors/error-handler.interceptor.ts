import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { MessageBusService, MessageType } from '../services/message-bus.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private messageBus: MessageBusService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      this.messageBus.notifyForMessage({
        text: err?.error?.message || 'Нещо се обърка!',
        type: MessageType.Error
      });
      //notify header
      return throwError(err);    //rethrow original error
    }));
  }
}
