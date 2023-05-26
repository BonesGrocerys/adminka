import { HttpBackend, HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from './API';
import { IOperationResult, OperationCode } from './Interfaces/OperationResult';
import { User } from './Interfaces/User';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: User | null | undefined;
  error: string | null | undefined;

  constructor(private http: HttpClient, private router: Router) {}

  login(
    login: string,
    password: string
  ): Observable<IOperationResult<boolean>> {
    return this.http
      .post(`http://172.20.10.2:7205/api/Auth/authenticate`, {
        login,
        password,
      })
      .pipe(
        tap((response: any) => console.log(response)),
        map((response: any) => {
          // Обработка ответа от сервера

          response?.result?.person?.roleId === 2
            ? (this.currentUser = response.result.person)
            : (this.currentUser = null);
          return {
            success: true,
            message: 'Login successful',
            operationCode: OperationCode.Ok,
            result: true,
          };
        }),
        catchError((error) => {
          console.log(error);
          this.error = error.error.message;
          console.log(this.error);

          return of({
            success: false,
            message: 'Login failed',
            operationCode: OperationCode.Unauthorized,
            errorCode: error.status,
          });
        })
      );
  }

  logout() {
    this.currentUser = null;
  }

  isLoggedIn(): Observable<boolean> {
    return this.currentUser ? of(true) : of(false);
  }
}
