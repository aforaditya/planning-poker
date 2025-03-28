import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface SessionResponseData {
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {
    this.loadSession();
  }
  private sessionUrl = 'http://localhost:5100/session';
  token = new BehaviorSubject<string | null>(null);

  createSession() {
    return this.http.post<SessionResponseData>(this.sessionUrl, {}).pipe(
      tap((resData) => {
        localStorage.setItem('token', resData.token);
        this.token.next(resData.token);
      })
    );
  }
  loadSession() {
    const token = localStorage.getItem('token');
    if (token) {
      this.token.next(token);
    } else {
      this.createSession().subscribe();
    }
  }
}
