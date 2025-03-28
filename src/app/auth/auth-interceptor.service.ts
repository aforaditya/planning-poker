import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({providedIn: 'root'})
export class AuthInterceptorService implements HttpInterceptor {
  private token: string | null = null;

  constructor(private authService: AuthService) {
    this.authService.token.subscribe((token) => {
      this.token = token;
    });
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${this.token}`),
    });
    return next.handle(modifiedReq);
  }
}
